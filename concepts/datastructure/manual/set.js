const A = new Set([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
console.log("A : ", A);
const B = new Set([3, 4, 5, 6, 7, 2, 3, 4, 5]);
console.log("B : ", B);

// 합집합
const union = new Set([...A, ...B]);
// console.log(union);

// 교집합
const interserction = new Set([...A].filter((x) => B.has(x)));
// console.log(interserction);

// 집합A - 집합B
const diffAB = new Set([...A].filter((x) => !B.has(x)));
// console.log(diffAB);

// 집합B - 집합A
const diffBA = new Set([...B].filter((x) => !A.has(x)));
// console.log(diffBA);

// 대칭차(집합)
const symmetricDiff = new Set([...diffAB, ...diffBA]);
// console.log(symmetricDiff);

let isSuperSet = true;
for (let elem of B) {
  if (!A.has(elem)) {
    isSuperSet = false;
    break;
  }
}
if (isSuperSet) {
  console.log("A는 B의 superset입니다.");
} else {
  console.log("A는 B의 superset이 아닙니다.");
}

isSuperSet = true;
for (let elem of A) {
  if (!B.has(elem)) {
    isSuperSet = false;
    break;
  }
}
if (isSuperSet) {
  console.log("B는 A의 superset입니다.");
} else {
  console.log("B는 A의 superset이 아닙니다.");
}
