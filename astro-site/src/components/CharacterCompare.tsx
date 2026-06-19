import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { CharacterTableEntry } from '../data/characterTable';

interface Props {
  characters: readonly CharacterTableEntry[];
  defaultCharacterIds: string[];
}

type MetricKey = keyof CharacterTableEntry['stats'];

const metrics: Array<{
  key: MetricKey;
  label: string;
  max: number;
  note: string;
  lowerIsBetter?: boolean;
}> = [
  { key: 'hp', label: 'HP', max: 400, note: 'Sourced game value' },
  { key: 'damage', label: 'Damage', max: 10, note: 'Editorial rating' },
  { key: 'mobility', label: 'Mobility', max: 10, note: 'Editorial rating' },
  { key: 'range', label: 'Range', max: 10, note: 'Editorial rating' },
  { key: 'teamUtility', label: 'Team utility', max: 10, note: 'Editorial rating' },
  {
    key: 'difficulty',
    label: 'Difficulty',
    max: 10,
    note: 'Lower is easier',
    lowerIsBetter: true,
  },
];

function validSelection(
  value: string | null,
  characterIds: Set<string>,
  fallback: string[],
) {
  if (!value) return fallback;

  const ids = [...new Set(value.split(',').filter((id) => characterIds.has(id)))].slice(0, 4);
  return ids.length >= 2 ? ids : fallback;
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      return false;
    }
  }

  return false;
}

export default function CharacterCompare({ characters, defaultCharacterIds }: Props) {
  const [selectedIds, setSelectedIds] = useState(defaultCharacterIds);
  const [urlStateReady, setUrlStateReady] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Copy comparison link');
  const [fallbackLink, setFallbackLink] = useState('');
  const fallbackInput = useRef<HTMLInputElement>(null);

  const characterIds = useMemo(
    () => new Set(characters.map((character) => character.id)),
    [characters],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSelectedIds(validSelection(params.get('characters'), characterIds, defaultCharacterIds));
    setUrlStateReady(true);
  }, [characterIds, defaultCharacterIds]);

  useEffect(() => {
    if (!urlStateReady) return;

    const url = new URL(window.location.href);
    url.searchParams.set('characters', selectedIds.join(','));
    window.history.replaceState({}, '', url);
  }, [selectedIds, urlStateReady]);

  useEffect(() => {
    if (fallbackLink) fallbackInput.current?.select();
  }, [fallbackLink]);

  const selectedCharacters = selectedIds
    .map((id) => characters.find((character) => character.id === id))
    .filter((character): character is CharacterTableEntry => Boolean(character));

  const updateSlot = (index: number, nextId: string) => {
    setFallbackLink('');
    setSelectedIds((current) => {
      if (!nextId) {
        return current.length > 2 ? current.filter((_, slotIndex) => slotIndex !== index) : current;
      }

      if (current.includes(nextId)) return current;
      const next = [...current];
      next[index] = nextId;
      return next;
    });
  };

  const addSlot = () => {
    const nextCharacter = characters.find((character) => !selectedIds.includes(character.id));
    if (nextCharacter && selectedIds.length < 4) {
      setFallbackLink('');
      setSelectedIds((current) => [...current, nextCharacter.id]);
    }
  };

  const copyComparisonLink = async () => {
    const copied = await copyText(window.location.href);
    setFallbackLink(copied ? '' : window.location.href);
    setCopyLabel(copied ? 'Link copied' : 'Link selected below');

    window.setTimeout(() => setCopyLabel('Copy comparison link'), 2200);
  };

  return (
    <section className="compare-tool" aria-labelledby="compare-tool-heading">
      <div className="browser-heading">
        <div>
          <p className="section-kicker">Interactive matchup desk</p>
          <h2 id="compare-tool-heading">Choose 2–4 battle styles</h2>
        </div>
        <button className="reset-button" type="button" onClick={copyComparisonLink}>
          {copyLabel}
        </button>
      </div>

      {fallbackLink && (
        <label className="compare-copy-fallback">
          Browser blocked automatic copying. Press Ctrl/Cmd+C:
          <input ref={fallbackInput} value={fallbackLink} readOnly />
        </label>
      )}

      <div className="compare-selectors">
        {selectedIds.map((selectedId, index) => (
          <div className="compare-selector" key={`${index}-${selectedId}`}>
            <label>
              Fighter {index + 1}
              <select
                value={selectedId}
                onChange={(event) => updateSlot(index, event.target.value)}
              >
                {characters.map((character) => (
                  <option
                    key={character.id}
                    value={character.id}
                    disabled={selectedIds.includes(character.id) && character.id !== selectedId}
                  >
                    {character.name} · {character.battleStyle}
                  </option>
                ))}
              </select>
            </label>
            {selectedIds.length > 2 && (
              <button
                type="button"
                className="compare-remove"
                onClick={() => updateSlot(index, '')}
                aria-label={`Remove fighter ${index + 1}`}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {selectedIds.length < 4 && (
          <button className="compare-add" type="button" onClick={addSlot}>
            + Add fighter
          </button>
        )}
      </div>

      <p className="compare-scroll-hint">Swipe sideways to see every fighter.</p>
      <div
        className="compare-grid"
        style={{ '--compare-count': selectedCharacters.length } as CSSProperties}
      >
        <div className="compare-grid__corner">
          <strong>Category</strong>
          <span>Best value is highlighted</span>
        </div>
        {selectedCharacters.map((character) => (
          <article className="compare-fighter" key={character.id}>
            <span className={`role-badge role-badge--${character.role.toLowerCase()}`}>
              {character.role}
            </span>
            <h3>{character.name}</h3>
            <p>{character.battleStyle}</p>
            <a href={`/characters/${character.slug}`}>Open guide →</a>
          </article>
        ))}

        {metrics.map((metric) => {
          const values = selectedCharacters.map((character) => character.stats[metric.key]);
          const bestValue = metric.lowerIsBetter ? Math.min(...values) : Math.max(...values);

          return (
            <div className="compare-metric-row" key={metric.key}>
              <div className="compare-metric-label">
                <strong>{metric.label}</strong>
                <span>{metric.note}</span>
              </div>
              {selectedCharacters.map((character) => {
                const value = character.stats[metric.key];
                const isBest = value === bestValue;
                const width = Math.min(100, (value / metric.max) * 100);

                return (
                  <div
                    className={`compare-value${isBest ? ' compare-value--best' : ''}`}
                    key={character.id}
                  >
                    <div>
                      <strong>{value}</strong>
                      {isBest && <span>Leader</span>}
                    </div>
                    <div
                      className="compare-value__track"
                      role="meter"
                      aria-label={`${character.name} ${metric.label}`}
                      aria-valuemin={0}
                      aria-valuemax={metric.max}
                      aria-valuenow={value}
                    >
                      <span style={{ width: `${width}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <p className="compare-caveat">
        HP is sourced game data. The 1–10 ratings are editorial guide scores, not frame data or exact
        damage calculations.
      </p>
    </section>
  );
}
