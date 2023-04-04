class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  getItem(key) {
    const item = this.cache.get(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  get oldestItem() {
    return this.cache.keys().next().value;
  }

  putItem(key, val) {
    // delete to refresh the insertion order
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // evict the oldest item in the cache
    else if (this.cache.size == this.capacity) {
      this.cache.delete(this.oldestItem);
    }
    this.cache.set(key, val);
  }
}

const cache = new LRU(5);

cache.putItem("a", 1);
cache.putItem("b", 2);
cache.putItem("c", 3);
cache.putItem("d", 4);
cache.putItem("e", 5);
cache.putItem("f", 6);

console.log(cache.cache);
console.log(cache.getItem("c"));
console.log(cache.getItem("f"));

console.log(cache.getItem("a"));
