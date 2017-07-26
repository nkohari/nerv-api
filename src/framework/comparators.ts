import { Model } from './Model';

export function lastWriteWins<T>(a: T, B: T) {
  return 1;
}

export function highestVersionWins<T extends Model>(a: T, b: T) {
  return a.version - b.version;
}
