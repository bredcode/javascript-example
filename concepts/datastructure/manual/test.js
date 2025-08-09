const A = new Set([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]); // array => set 으로 변환 (알아서 중복제거 됨)
console.log(A);
const B = new Set([3, 4, 5, 6, 7, 2, 3, 4, 5]); // 1,2,3,4,5,6,7이 아닌 value에 대한 순서를 기억해줌
console.log(B);

// 합집합
const union = new Set([...A, ...B]); // set => array spread syntax 사용
// 교집합
const intersection = new Set([...A].filter((x) => B.has(x))); // 둘 다 있는 것들을 솎아낸다.
// 집합A - 집합B
const difference1 = new Set([...A].filter((x) => !B.has(x))); // set1 - set2
// 집합B - 집합A
const difference2 = new Set([...B].filter((x) => !A.has(x))); // set2 - set1
// 대칭차(집합)
const symmetricDifference = new Set([...difference1, ...difference2]); // union - intersection

//확대집합 superset
let isSuperSet = true;
for (let element of B) {
  if (!A.has(element)) {
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
for (let element of A) {
  if (!B.has(element)) {
    isSuperSet = false;
    break;
  }
}
if (isSuperSet) {
  console.log("B는 A의 superset입니다.");
} else {
  console.log("B는 A의 superset이 아닙니다.");
}
