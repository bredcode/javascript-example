class SelectionSort {
  sort(data) {
    let len = data.length;

    // 선택 정렬에서 N - 1회전이 종료되면 마지막 데이터도 자동 정렬이 완료되기에 len - 1
    for (let i = 0; i < len - 1; i++) {
      let minIdx = i; // i회전에 i번째 원소가 최솟값임을 가정

      for (let j = i + 1; j < len; j++) {
        if (data[minIdx] > data[j]) {
          minIdx = j;
        }
      }

      // 최솟값이 있는 index를 찾으면 해당 minIdx와 현대 위치 i를 swap
      // 이때 swap은 javascript ES6의 구조 분해 할당 구문을 이용
      [data[i], data[minIdx]] = [data[minIdx], data[i]];
    }

    /**
     * let tmp = data[i];
     * data[i] = data[minIdx];
     * data[minIdx] = tmp;
     */

    return data;
  }
}

const selectionSort = new SelectionSort();
let arr = [28, 10, 14, 37, 8, 27];
console.log(arr);
let sortedArr = selectionSort.sort(arr);
console.log(sortedArr);
