let N = 10;
let K = 4790;

let arr = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

let count = 0;
arr = arr.reverse();
arr.forEach((money) => {
  console.log("money : ", money);
  while (K - money >= 0) {
    console.log("K : ", K);
    K -= money;
    count++;
  }
});

console.log(count);
