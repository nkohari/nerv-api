"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparators_1 = require("./comparators");
class Collection {
    constructor(data = {}) {
        this.items = data.items || [];
        this.isLoading = data.isLoading || false;
    }
    get length() {
        return this.items.length;
    }
    get(id) {
        return this.items.find(item => item.id === id);
    }
    has(id) {
        return this.items.some(item => item.id === id);
    }
    at(index) {
        return this.items[index];
    }
    all() {
        return this.next({ items: [...this.items] });
    }
    find(func) {
        return this.items.find(func);
    }
    filter(func) {
        return this.next({ items: this.items.filter(func) });
    }
    map(mapper) {
        return this.items.map(mapper);
    }
    reduce(reducer, initialValue) {
        return this.items.reduce(reducer, initialValue);
    }
    sort(compare) {
        const items = [...this.items];
        items.sort(compare);
        return this.next({ items });
    }
    best(compare) {
        return this.items.reduce((winner, item) => {
            return (!winner || compare(item, winner) > 0) ? item : winner;
        }, null);
    }
    merge(newItems, compare = comparators_1.lastWriteWins, patch = {}) {
        const hash = [...this.items, ...newItems].reduce((keymap, item) => {
            const existing = keymap[item.id];
            if (!existing || compare(item, existing) > 0) {
                keymap[item.id] = item;
            }
            return keymap;
        }, {});
        const items = Object.keys(hash).map(id => hash[id]);
        return this.next(Object.assign({}, patch, { items }));
    }
    next(patch) {
        const ctor = this.constructor;
        return new ctor(Object.assign({}, this, patch));
    }
}
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map