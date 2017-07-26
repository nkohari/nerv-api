export declare type Comparator<T> = (a: T, b: T) => number;
export declare type Mapper<T, R> = (item: T, index?: number, arr?: T[]) => R;
export declare type Predicate<T> = (value: T, index?: number, array?: T[]) => boolean;
export declare type Reducer<T, R = T> = (curr: R, item: T, index?: number) => R;
