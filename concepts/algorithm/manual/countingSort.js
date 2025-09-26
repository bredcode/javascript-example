class CountingSort {
  sort(data) {
    // data 배열에서 가장 큰 수를 찾아야 함
    const max = Math.max(...data);
    const countingArr = Array.from({ length: max + 1 }, () => 0);

    let len = data.length;
    // 현재 값을 토대로 countingArr의 인덱스 위치에 값을 + 1 해준다.
    for (let i = 0; i < len; i++) {
      countingArr[data[i]]++;
    }
    // console.log(countingArr);

    // countingArr의 값이 1 이상일 때
    // 해당 인덱스 값을 data에 넣어주면 정렬이 완료
    let idx = 0;
    len = countingArr.length;
    for (let i = 0; i < len; i++) {
      if (countingArr[i] > 0) {
        for (let j = 0; j < countingArr[i]; j++) {
          data[idx++] = i;
        }
      }
    }

    return data;
  }
}

const countingSort = new CountingSort();
let arr = [1, 2, 2, 3, 2, 8, 7, 9, 7, 9];
console.log(arr);
let sortedArr = countingSort.sort(arr);
console.log(sortedArr);
