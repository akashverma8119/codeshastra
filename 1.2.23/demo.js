let a=30;
let b=3;
let c= a++ + b++;
console.log(a);
console.log(b);
console.log(c);

console.log("---------------");

let x=3;
let y=4;
const z= --x + x++ + y-- - --y;
console.log(x);
console.log(y);
console.log(z);

console.log("---------------");

let d=3;
let e= d++ + --d + d-- + "s"
console.log(d);
console.log(e);

console.log("---------------");

let a1=3;
let b1=4;
let c1=5;
let d1=((a1++>=c1--)?3:5)>=2?6:8;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);