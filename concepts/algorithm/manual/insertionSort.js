class InsertionSort {
  sort(data) {
    let len = data.length;

    // 삽입 정렬은 두번째 원소부터 시작
    for (let i = 1; i < len; i++) {
      let target = data[i];
      let targetIdx = i;

      // 이미 정렬된 0~i-1번 인덱스 사이에서
      // target data보다 배열 내의 j번째 데이터가 크면 한칸씩 뒤로 밀기

      // target : 1
      // 1 4 3 2
      for (let j = i - 1; j >= 0 && data[j] > target; j--) {
        targetIdx = j;
        data[j + 1] = data[j];
      }

      // 마지막으로 target data가 들어가야 할 위치에 데이터를 삽입하면서
      // 0 ~ targetIdx 까지 정렬이 완료
      data[targetIdx] = target;
    }
    return data;
  }
}

const insertSort = new InsertionSort();
let arr = [28, 10, 14, 37, 8, 27];
console.log(arr);
let sortedArr = insertSort.sort(arr);
console.log(sortedArr);
