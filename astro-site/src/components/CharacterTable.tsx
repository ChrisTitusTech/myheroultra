import { useMemo, useState } from 'react';
import type { CharacterTableEntry } from '../data/characterTable';
import type { CharacterRole } from '../data/characters';

type SortKey = 'name' | 'hp' | 'damage' | 'mobility' | 'range' | 'teamUtility' | 'difficulty';
type SortDirection = 'ascending' | 'descending';
type DifficultyFilter = 'All' | 'beginner' | 'intermediate' | 'advanced';

interface Props {
  characters: readonly CharacterTableEntry[];
}

const roles: Array<'All' | CharacterRole> = ['All', 'Assault', 'Strike', 'Rapid', 'Technical', 'Support'];

const sortOptions: Array<{ label: string; value: SortKey }> = [
  { label: 'Name', value: 'name' },
  { label: 'HP', value: 'hp' },
  { label: 'Damage', value: 'damage' },
  { label: 'Mobility', value: 'mobility' },
  { label: 'Range', value: 'range' },
  { label: 'Team Utility', value: 'teamUtility' },
  { label: 'Difficulty', value: 'difficulty' },
];

const difficultyOptions: Array<{ label: string; value: DifficultyFilter }> = [
  { label: 'All difficulties', value: 'All' },
  { label: 'Beginner · 1–4', value: 'beginner' },
  { label: 'Intermediate · 5–7', value: 'intermediate' },
  { label: 'Advanced · 8–10', value: 'advanced' },
];

function getSortValue(character: CharacterTableEntry, sortKey: SortKey): string | number {
  if (sortKey === 'name') return character.name;
  return character.stats[sortKey];
}

function matchesDifficulty(character: CharacterTableEntry, difficulty: DifficultyFilter) {
  if (difficulty === 'All') return true;

  const rating = character.stats.difficulty;
  if (difficulty === 'beginner') return rating <= 4;
  if (difficulty === 'intermediate') return rating >= 5 && rating <= 7;
  return rating >= 8;
}

function formatTag(tag: string) {
  return tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function CharacterTable({ characters }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('damage');
  const [sortDirection, setSortDirection] = useState<SortDirection>('descending');
  const [role, setRole] = useState<'All' | CharacterRole>('All');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('All');
  const [tag, setTag] = useState('All');
  const [beginnerOnly, setBeginnerOnly] = useState(false);

  const tags = useMemo(
    () => [...new Set(characters.flatMap((character) => character.tags))].sort(),
    [characters],
  );

  const visibleCharacters = useMemo(() => {
    return [...characters]
      .filter((character) => role === 'All' || character.role === role)
      .filter((character) => matchesDifficulty(character, difficulty))
      .filter((character) => tag === 'All' || character.tags.includes(tag))
      .filter((character) => !beginnerOnly || character.stats.difficulty <= 5)
      .sort((a, b) => {
        const aValue = getSortValue(a, sortKey);
        const bValue = getSortValue(b, sortKey);
        const comparison = typeof aValue === 'string' && typeof bValue === 'string'
          ? aValue.localeCompare(bValue)
          : Number(aValue) - Number(bValue);

        return sortDirection === 'ascending' ? comparison : -comparison;
      });
  }, [characters, role, difficulty, tag, beginnerOnly, sortKey, sortDirection]);

  const filtersAreActive =
    role !== 'All' ||
    difficulty !== 'All' ||
    tag !== 'All' ||
    beginnerOnly;

  const resetFilters = () => {
    setRole('All');
    setDifficulty('All');
    setTag('All');
    setBeginnerOnly(false);
  };

  const updateSortKey = (nextSortKey: SortKey) => {
    setSortKey(nextSortKey);
    setSortDirection(nextSortKey === 'name' ? 'ascending' : 'descending');
  };

  return (
    <section className="interactive-panel" aria-labelledby="character-browser-heading">
      <div className="browser-heading">
        <div>
          <p className="section-kicker">Interactive roster</p>
          <h2 id="character-browser-heading">Compare characters</h2>
        </div>
        <p className="result-count" aria-live="polite">
          {visibleCharacters.length} of {characters.length} characters
        </p>
      </div>

      <div className="controls">
        <label>
          Sort by
          <select value={sortKey} onChange={(event) => updateSortKey(event.target.value as SortKey)}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label>
          Order
          <select
            value={sortDirection}
            onChange={(event) => setSortDirection(event.target.value as SortDirection)}
          >
            <option value="descending">{sortKey === 'name' ? 'Z to A' : 'High to low'}</option>
            <option value="ascending">{sortKey === 'name' ? 'A to Z' : 'Low to high'}</option>
          </select>
        </label>
        <label>
          Role
          <select value={role} onChange={(event) => setRole(event.target.value as 'All' | CharacterRole)}>
            {roles.map((roleName) => <option key={roleName} value={roleName}>{roleName}</option>)}
          </select>
        </label>
        <label>
          Difficulty
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value as DifficultyFilter)}
          >
            {difficultyOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label>
          Playstyle tag
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            <option value="All">All tags</option>
            {tags.map((tagName) => (
              <option key={tagName} value={tagName}>{formatTag(tagName)}</option>
            ))}
          </select>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={beginnerOnly} onChange={(event) => setBeginnerOnly(event.target.checked)} />
          Beginner-friendly · difficulty 5 or lower
        </label>
      </div>

      <div className="filter-actions">
        <p>Ratings are editorial scores from 1–10; HP is sourced game data.</p>
        {filtersAreActive && (
          <button className="reset-button" type="button" onClick={resetFilters}>
            Reset filters
          </button>
        )}
      </div>

      {visibleCharacters.length === 0 ? (
        <div className="browser-empty-state">
          <div role="status">
            <strong>No characters match these filters.</strong>
            <p>Try another role, difficulty, or playstyle tag.</p>
          </div>
          <button className="reset-button" type="button" onClick={resetFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="table-scroll" tabIndex={0} aria-label="Character comparison table">
          <table>
            <caption className="sr-only">Character role, health, and editorial ratings</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">HP</th>
                <th scope="col">Damage</th>
                <th scope="col">Mobility</th>
                <th scope="col">Range</th>
                <th scope="col">Utility</th>
                <th scope="col">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {visibleCharacters.map((character) => (
                <tr key={character.id}>
                  <td data-label="Name"><a href={`/characters/${character.slug}`}>{character.name}</a></td>
                  <td data-label="Role">{character.role}</td>
                  <td data-label="HP">{character.stats.hp}</td>
                  <td data-label="Damage">{character.stats.damage}</td>
                  <td data-label="Mobility">{character.stats.mobility}</td>
                  <td data-label="Range">{character.stats.range}</td>
                  <td data-label="Utility">{character.stats.teamUtility}</td>
                  <td data-label="Difficulty">{character.stats.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
