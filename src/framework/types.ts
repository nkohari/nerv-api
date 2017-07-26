export type Comparator<T> = (a: T, b: T) => number;
export type Mapper<T, R> = (item: T, index?: number, arr?: T[]) => R;
export type Predicate<T> = (value: T, index?: number, array?: T[]) => boolean;
export type Reducer<T, R = T> = (curr: R, item: T, index?: number) => R;
