var m = new Map();

m.set(1, 1);
m.set("2", 2);
m.set(new Array(), 3);

let arr = new Array();
m.set(arr, 4);

class a {}
m.set(a, 5);

m.set(NaN, 6);
m.set(undefined, 7);
m.set(null, 8);

console.log(m.delete(123123));
m.clear();
console.log(m);
