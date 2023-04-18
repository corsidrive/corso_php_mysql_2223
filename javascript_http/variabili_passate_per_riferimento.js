const a = [1,2,3,4];

// b = [1,2,3,4]
// shallow copy
const b = new Array(...a);
let c = "mario"

// d = c
// d = new String("Luigi")
// console.log(c,d)

b.push("Z");
console.log(a);
console.log(b);

