import { kek } from "./stuff/hej"; //standard import
import { kek2 } from "#src/stuff/hej"; //non-relative import
import stuff from "./stuff"; //index from folder import
import fetch from "node-fetch"; //esm only module

const r = await fetch("https://www.google.com"); //top-level await

console.log(r);
console.log(stuff(9));
console.log(kek(9));
console.log(kek2(9));
