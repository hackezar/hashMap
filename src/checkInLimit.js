import { HashMap } from "../hashmap";

export default function checkInLimit(index) {
    if (index < 0 || index >= HashMap.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }