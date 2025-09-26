function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  // floor
  /**
   * m
   * s e
   * 1 2 -> (0 + 1) / 2 -> floor(0.5) = 0
   */
  // ceil
  /**
   *   m
   * s e
   * 1 2 -> (0 + 1) / 2 -> ceil(0.5) = 1
   */
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    console.log(`start ${start} mid : ${mid} end : ${end}`);

    /**
     *     target = 5
     *
     * 1.  s  m     e
     *     1, 3, 5, 6
     *
     * 2.       s,m  e
     *     1, 3, 5, 6
     *
     */
    if (arr[mid] == target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  /**
   *     target = 7
   *
   * 1.  s  m     e
   *     1, 3, 5, 6
   *
   * 2.       s,m  e
   *     1, 3, 5, 6
   *
   * 3.          s,m,e
   *     1, 3, 5, 6
   *
   * 4.           e s
   *     1, 3, 5, 6
   *
   */
  /**
   *     target = 0
   *
   * 1.  s  m     e
   *     1, 3, 5, 6
   *
   * 2.s,m,e
   *     1, 3, 5, 6
   *
   * 3.e s
   *     1, 3, 5, 6
   */
  /**
   *     target = 2
   *
   * 1.  s  m     e
   *     1, 3, 5, 6
   *
   * 2. s,m e
   *     1, 3, 5, 6
   *
   * 3.   s,m,e
   *     1, 3, 5, 6
   *
   * 4.  e  s
   *     1, 3, 5, 6
   */
  return start;
}

// let target = 5; // 2
// let target = 7; // 4
// let target = 2; // 1
let target = 0; // 0

let arr = [1, 3, 5, 6];
let idx = binarySearch(arr, target);
console.log(idx);

// // LIS 알고리즘

// // target이 배열 내에서 처음으로 나타나는 위치
// function lower_bound(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   let pos = -1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] == target) {
//       pos = mid; // 현재 위치가 target이 나온 가장 왼쪽 위치라고 가정
//       end = mid - 1; // 추가로 왼쪽 구역을 탐색하여 target이 있나 확인
//     } else if (arr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return pos;
// }

// // target이 배열 내에서 마지막으로 나타나는 위치
// function upper_bound(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   let pos = -1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] == target) {
//       pos = mid; // 현재 위치가 target이 나온 가장 오른쪽 위치라고 가정
//       start = mid + 1; // 혹시 추가로 더 오른쪽에 target값이 있는지 확인
//     } else if (arr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return pos;
// }

// let N = 10;
// let M = 2;

// let arr = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3];

// // 이진 탐색의 조건 : 정렬된 배열에서 해야한다.
// arr = arr.sort((a, b) => a - b);
// console.log(arr);
// let lowerPos = lower_bound(arr, -10);
// console.log(lowerPos);

// let upperPos = upper_bound(arr, -10);
// console.log(upperPos);

// console.log(upperPos - lowerPos + 1);
