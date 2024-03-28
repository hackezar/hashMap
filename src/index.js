import _ from "lodash";
import "./style.css";

import { HashMap } from "../hashmap";
import { hashFactory } from "../hashmap";

// Create HashMap
hashFactory();

// Hash tests
// Converts the key name into a numerical hash code
console.log(HashMap.hash('Odin'));

// Set tests
// if this key is not created, will create the key and input the value
// If this key has been created, it will replaces the key value with the new value
HashMap.set('Odin', 'Zeuss');
HashMap.set('Donald', 'Trump');
console.log(HashMap.set('Jack', 'Halcisak'));

// Get tests
//Will get the value for the input key
console.log(HashMap.get('Odin'));

// Has tests
// console logs true if the key is in the Hash
// logs false if it is not in the hash
console.log(HashMap.has('Odin'));
console.log(HashMap.has('Tim'));

// remove tests
// if the key is in the hashmap, the key object will be removed from the hashmap, true will be returned
// if the key is not in the hashmap, false will be returned
console.log(HashMap.remove('Donald'));
console.log(HashMap)

// Length test
//Length of the number of stored keys
console.log(HashMap.length());

// Clear test
// Removes all entries in the hash map
HashMap.clear();
console.log(HashMap);

// Add some more data in
HashMap.set('Odin', 'Zeuss');
HashMap.set('Donald', 'Trump');
console.log(HashMap.set('Jack', 'Halcisak'));

// Keys test
// Returns all of the keys in the HashMap
console.log(HashMap.keys());

// Values test
// Returns all of the values in the HashMap
console.log(HashMap.values());

// Entries test
// Returns an array that contains each key value pair,
// ex: [[firstKey, firstValue], [secondKey, secondValue]]
console.log(HashMap.entries()); 

