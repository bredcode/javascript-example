function compare(a, b) {
  return a.value - b.value;
}

class QuickSort {
  sort(data, start, end) {
    if (start >= end) return;

    let left = start;
    let right = end;

    let pivot = data[left]; // pivot = 첫 요소

    while (left < right) {
      // pivot보다 큰 값이면 오른쪽을 당김 → compare 사용
      while (compare(data[right], pivot) >= 0 && left < right) {
        right--;
      }

      // 그렇지 않으면 pivot 왼쪽에 덮어쓰기
      data[left] = data[right];

      // pivot보다 작은 값이면 왼쪽을 이동
      while (compare(data[left], pivot) <= 0 && left < right) {
        left++;
      }

      // 그렇지 않으면 pivot 오른쪽에 덮어쓰기
      data[right] = data[left];

      // left와 right가 만났을 때 pivot 확정
      if (left === right) {
        data[left] = pivot;

        this.sort(data, start, right - 1);
        this.sort(data, left + 1, end);
      }
    }

    return data;
  }
}

const items = [
  { id: "A", value: 3 },
  { id: "B", value: 1 },
  { id: "C", value: 3 },
  { id: "D", value: 2 },
  { id: "E", value: 3 },
];

const quickSort = new QuickSort();

console.log("원본:", items);

quickSort.sort(items, 0, items.length - 1);

console.log("정렬 결과:", items);
