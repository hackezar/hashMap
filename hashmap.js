import checkInLimit from "./src/checkInLimit";

export const HashMap = {
    buckets: new Map(),
    hash: hash,
    set: set,
    get: get,
    has: has,
    remove: remove,
    length: length,
    clear: clear,
    keys: keys,
    values: values,
    entries: entries
}

export const HashSet = {
    buckets: new Set(),
    hash: hash,
    set: value => HashSet.buckets.add(value),
    get: get,
    has: has,
    remove: remove,
    length: length,
    clear: clear,
    keys: keys,
    values: values,
    entries: entries

}

export function hashSetFactory() {
    return Object.create(HashSet);
}

export function hashFactory() {
    return Object.create(HashMap);
}

function hash(key) {
    let hashCode = 0;
    
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
}

function set(key, value) {
    let hashKey = hash(key);
    if (hashKey in HashMap.buckets) {
        HashMap.buckets.hashkey = value
    } else {
        HashMap.buckets.set(hashKey, value);
    }
    return HashMap;
}

function get(key) {
    let hashKey = hash(key);
    if (HashMap.buckets.has(hashKey) == true) {
        console.log('found');
        checkInLimit(HashMap.buckets.length);
        return HashMap.buckets.get(hashKey);
    } else {
        console.log('Key Not Found')
        return null;
    }
}

function has(key) {
    let hashKey = hash(key);
    return HashMap.buckets.has(hashKey); 
}

function remove(key) {
    let hashKey = hash(key);
    if (HashMap.buckets.has(hashKey) == true) {
        HashMap.buckets.delete(hashKey);
        return true;
    } else 
        return false;
}

function length() {
    return HashMap.buckets.size
}

function clear() {
    return HashMap.buckets.clear();
    
}

function keys() {
    return HashMap.buckets.keys();
}

function values() {
    return HashMap.buckets.values();
}

function entries() {
    return HashMap.buckets.entries();
}