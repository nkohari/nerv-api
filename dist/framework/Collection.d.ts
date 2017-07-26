import { HasIdentifier } from './HasIdentifier';
import { Comparator, Mapper, Predicate, Reducer } from './types';
export declare class Collection<T extends HasIdentifier> {
    items: T[];
    isLoading: boolean;
    constructor(data?: Partial<Collection<T>>);
    readonly length: number;
    get(id: string): T;
    has(id: string): boolean;
    at(index: number): T;
    all(): this;
    find(func: Predicate<T>): T;
    filter(func: Predicate<T>): this;
    map<R>(mapper: Mapper<T, R>): R[];
    reduce<R = T>(reducer: Reducer<T, R>, initialValue: R): R;
    sort(compare: Comparator<T>): this;
    best(compare: Comparator<T>): T;
    merge(newItems: T[], compare?: Comparator<T>, patch?: Partial<Collection<T>>): this;
    next(patch: Partial<Collection<T>>): this;
}
