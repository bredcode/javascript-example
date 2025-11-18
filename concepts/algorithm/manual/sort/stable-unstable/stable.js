// 객체 비교 함수
// a < b → 음수, a > b → 양수
function compare(a, b) {
  return a.value - b.value; // value 기준 오름차순 정렬
}

class MergeSort {
  merge(left, right) {
    const sortedArr = [];

    // left, right 첫 원소를 비교하여 더 작은 것을 push
    while (left.length && right.length) {
      // compare(a, b) <= 0 → a가 먼저
      if (compare(left[0], right[0]) <= 0) {
        // left 먼저 push → 안정 정렬 유지됨
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }

    // 남은 값 붙이기
    return [...sortedArr, ...left, ...right];
  }

  sort(data) {
    if (data.length === 1) return data;

    const mid = Math.ceil(data.length / 2);

    const left = data.slice(0, mid);
    const right = data.slice(mid);

    const sortedLeft = this.sort(left);
    const sortedRight = this.sort(right);

    return this.merge(sortedLeft, sortedRight);
  }
}

const items = [
  { id: "A", value: 3 },
  { id: "B", value: 1 },
  { id: "C", value: 3 },
  { id: "D", value: 2 },
  { id: "E", value: 3 },
];

const mergeSort = new MergeSort();

console.log("원본:", items);

const sorted = mergeSort.sort(items);

console.log("정렬 결과:", sorted);
