import _ from "lodash";
import "./style.css";

import { HashMap } from "../hashmap";
import { hashFactory } from "../hashmap";

hashFactory();

console.log(HashMap.hash('Odin'));

console.log(HashMap.set('Odin', 'Zeuss'));

console.log(HashMap.get('Odin'));