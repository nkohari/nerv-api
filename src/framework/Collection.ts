import { HasIdentifier } from './HasIdentifier';
import { Comparator, Mapper, Predicate, Reducer } from './types';
import { lastWriteWins } from './comparators';

export class Collection<T extends HasIdentifier> {

  items: T[];
  isLoading: boolean;

  constructor(data: Partial<Collection<T>> = {}) {
    this.items = data.items || [];
    this.isLoading = data.isLoading || false;
  }

  get length() {
    return this.items.length;
  }

  get(id: string): T {
    return this.items.find(item => item.id === id);
  }

  has(id: string): boolean {
    return this.items.some(item => item.id === id);
  }

  at(index: number): T {
    return this.items[index];
  }

  all() {
    return this.next({ items: [...this.items] });
  }

  find(func: Predicate<T>): T {
    return this.items.find(func);
  }

  filter(func: Predicate<T>): this {
    return this.next({ items: this.items.filter(func) });
  }

  map<R>(mapper: Mapper<T, R>): R[] {
    return this.items.map(mapper);
  }

  reduce<R = T>(reducer: Reducer<T, R>, initialValue: R): R {
    return this.items.reduce(reducer, initialValue);
  }

  sort(compare: Comparator<T>): this {
    const items = [...this.items];
    items.sort(compare);
    return this.next({ items });
  }

  best(compare: Comparator<T>): T {
    return this.items.reduce((winner, item) => {
      return (!winner || compare(item, winner) > 0) ? item : winner;
    }, null);
  }

  merge(newItems: T[], compare: Comparator<T> = lastWriteWins, patch: Partial<Collection<T>> = {}): this {
    const hash = [...this.items, ...newItems].reduce((keymap, item) => {
      const existing = keymap[item.id];
      if (!existing || compare(item, existing) > 0) {
        keymap[item.id] = item;
      }
      return keymap;
    }, {});
    const items = Object.keys(hash).map(id => hash[id]);
    return this.next({ ...patch, items });
  }

  next(patch: Partial<Collection<T>>): this {
    const ctor = this.constructor as any;
    return new ctor({
      ...(this as any),
      ...patch
    });
  }

}
