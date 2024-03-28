import checkInLimit from "./src/checkInLimit";

export const HashMap = {
    buckets: new Map(),
    hash: hash,
    set: set,
    get: get
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