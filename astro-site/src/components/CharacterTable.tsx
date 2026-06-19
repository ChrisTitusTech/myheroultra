import { useMemo, useState } from 'react';
import type { CharacterTableEntry } from '../data/characterTable';
import type { CharacterRole } from '../data/characters';

type SortKey = 'name' | 'hp' | 'damage' | 'mobility' | 'range' | 'teamUtility' | 'difficulty' | 'beginnerRating';

interface Props {
  characters: readonly CharacterTableEntry[];
}

const roles: Array<'All' | CharacterRole> = ['All', 'Assault', 'Strike', 'Rapid', 'Technical', 'Support'];

function getSortValue(character: CharacterTableEntry, sortKey: SortKey): string | number {
  if (sortKey === 'name') return character.name;
  if (sortKey === 'beginnerRating') return character.beginnerRating;
  return character.stats[sortKey];
}

export default function CharacterTable({ characters }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('damage');
  const [role, setRole] = useState<'All' | CharacterRole>('All');
  const [beginnerOnly, setBeginnerOnly] = useState(false);

  const visibleCharacters = useMemo(() => {
    return [...characters]
      .filter((character) => role === 'All' || character.role === role)
      .filter((character) => !beginnerOnly || character.beginnerRating >= 7)
      .sort((a, b) => {
        const aValue = getSortValue(a, sortKey);
        const bValue = getSortValue(b, sortKey);

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        }

        return Number(bValue) - Number(aValue);
      });
  }, [characters, role, beginnerOnly, sortKey]);

  return (
    <section className="interactive-panel" aria-label="Sortable character table">
      <div className="controls">
        <label>
          Sort by
          <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}>
            <option value="damage">Damage</option>
            <option value="hp">HP</option>
            <option value="mobility">Mobility</option>
            <option value="range">Range</option>
            <option value="teamUtility">Team Utility</option>
            <option value="difficulty">Difficulty</option>
            <option value="beginnerRating">Beginner Rating</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label>
          Role
          <select value={role} onChange={(event) => setRole(event.target.value as 'All' | CharacterRole)}>
            {roles.map((roleName) => <option key={roleName} value={roleName}>{roleName}</option>)}
          </select>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={beginnerOnly} onChange={(event) => setBeginnerOnly(event.target.checked)} />
          Beginner-friendly only
        </label>
      </div>

      {visibleCharacters.length === 0 ? (
        <p role="status">No characters match the current filters.</p>
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
                <th scope="col">Utility</th>
                <th scope="col">Difficulty</th>
                <th scope="col">Beginner</th>
              </tr>
            </thead>
            <tbody>
              {visibleCharacters.map((character) => (
                <tr key={character.id}>
                  <td><a href={`/characters/${character.slug}`}>{character.name}</a></td>
                  <td>{character.role}</td>
                  <td>{character.stats.hp}</td>
                  <td>{character.stats.damage}</td>
                  <td>{character.stats.mobility}</td>
                  <td>{character.stats.teamUtility}</td>
                  <td>{character.stats.difficulty}</td>
                  <td>{character.beginnerRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
