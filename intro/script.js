// let n = 5;
// for(let i=0; i<n; i++){
//     console.log("hello, ",i);
// }



//process: this object provides info about and control overpp the current node.js process.
// process.argv: return an array containing the cli arguments passed when the nodejs process was launched

/*module.export a special object
require - a built-in-function to include external module that exist is separate files


const math = require("./math");
console.log(math.sum(5,5))
console.log(math.sub(5,5))
console.log(math.mul(5,5))
console.log(math.PI)
console.log(math.g)


const phal = require("./fruits")
console.log(phal)

console.log(phal.apple);
console.log(phal.mango);
console.log(phal.orange);
console.log(phal.banana); */


//require vs import

//we can't selectively load 
// only the pieces we need with require but with import,we can selectively load only 
// the pieces we need,which can save memory .
// Loading is synchronous for require but can be asynchronous for for "import"

//though we cant use directly export and import , first we need to add "type":"module"
//  in dependecies of package.json ifle


import {sum,PI} from "./math.js";
console.log(sum(5,10))
console.log(PI)