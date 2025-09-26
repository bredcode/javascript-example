class RadixSort {
  // 최대 자릿수를 찾는 함수
  getMaxDigit(data) {
    let maxDigit = 0;
    // 3221 -> "3221" -> ["3","2","2","1"] -> 4
    data.map(
      (elem) =>
        (maxDigit = Math.max(maxDigit, elem.toString().split("").length))
    );

    return maxDigit;
  }

  // getDigit(3221, 0) -> 1
  // getDigit(3221, 1) -> 2
  // getDigit(3221, 2) -> 2
  // getDigit(3221, 3) -> 3
  // getDigit(3221, 4) -> 0
  getDigit(num, i) {
    // 3221, 2경우
    // 3221 / 10^2 = 32
    // 32 % 10 = 2
    // 자바스크립트 소수점 연산 시 오류로 인해 소수점을 내림해줘야함
    // ex) 0.1 + 0.2를 입력하면 0.3이 아니라 0.30000000000000004가 출력
    // 따라서 Math.floor가 필요
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
  }
  sort(data) {
    const maxDigit = this.getMaxDigit(data);

    // 0 ~ 최대 자릿수만큼 반복
    for (let i = 0; i < maxDigit; i++) {
      // 정수 0 ~ 9를 담을 수 있는 버킷(queue) 생성
      let bucket = Array.from({ length: 10 }, () => []);

      const len = data.length;
      // 데이터들을 순회하면서 해당 값의 자릿수를 가져와서 bucket에 넣어준다.
      for (let j = 0; j < len; j++) {
        let digit = this.getDigit(data[j], i);
        bucket[digit].push(data[j]);
      }

      // flatmap을 통해 data를 정렬시켜줍니다.
      // flatmap 이용 시 [[1], [2,5], [4]] -> [1,2,5,4]
      data = bucket.flatMap((elem) => elem);
    }

    return data;
  }
}

console.log(Math.floor(0.1 + 0.2));
const radixSort = new RadixSort();
let arr = [3221, 1, 10, 960, 577, 9420, 7, 522];
console.log(arr);
let sortedArr = radixSort.sort(arr);
console.log(sortedArr);
