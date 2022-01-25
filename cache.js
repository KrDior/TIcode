// Implement Cache class with max size restriction. In case of reaching a limit delete the oldest key.
Example:
const cache = new Cache(3);
cache.set('a', 3); // a: 3
cache.set('b', 4); // a: 3, b: 4
cache.set('c', 5); // a: 3, b: 4, c:5
cache.set('d', 6); // b: 4, c:5, d:6
cache.set('c', 7); // b: 4, c:7, d:6
cache.get('c'); // returns 7
