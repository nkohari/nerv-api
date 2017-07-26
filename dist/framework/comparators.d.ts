import { Model } from './Model';
export declare function lastWriteWins<T>(a: T, B: T): number;
export declare function highestVersionWins<T extends Model>(a: T, b: T): number;
