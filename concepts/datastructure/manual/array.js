let arr = [1, 2, 3, 4];
console.log(`arr : ${arr}`);

console.log("\n");

for (const [key, value] of arr.entries()) {
  console.log(`key : ${key}, value : ${value}`);
}

console.log("\n");

arr.push(5);
console.log(`arr.push(5) : ${arr}`);

console.log("\n");

arr.pop();
console.log(`arr.pop() : ${arr}`);

console.log("\n");

arr.shift();
console.log(`arr.shift() : ${arr}`);

console.log("\n");

arr.indexOf(1);
console.log(`arr.indexOf(1) : ${arr.indexOf(1)}`);

console.log("\n");

arr.indexOf(4);
console.log(`arr.indexOf(4) : ${arr.indexOf(4)}`);

console.log("\n");

let arr2 = [-1, -2];
arr = arr.concat(arr2);
console.log(`arr.concat(arr2) : ${arr}`);

console.log("\n");

arr = arr.map((value) => value * 2);
console.log(`arr.map(value => value * 2) : ${arr}`);

console.log("\n");

arr = arr.filter((value) => value > 0);
console.log(`arr.filter((value) => value > 0) : ${arr}`);
