class AdvancedBubbleSort {
  // 만약 버블 정렬에서 반복문 내에서 swap이 발생하지 않는다면
  // 즉 그말은 모두 정렬된 것이나 마찬가지므로 더이상 버블소트를 진행하지 않아도 된다.
  sort(data) {
    let len = data.length;
    let isSwap = false;

    for (let i = 0; i < len; i++) {
      isSwap = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
          isSwap = true;
        }
      }

      if (!isSwap) {
        break;
      }
    }

    return data;
  }
}
// class BubbleSort {
//   sort(data) {
//     let len = data.length;
//     // 각 회전을 의미
//     for (let i = 0; i < len; i++) {
//       // ㅇ ㅇ ㅇ V
//       for (let j = 0; j < len - i - 1; j++) {
//         if (data[j] > data[j + 1]) {
//           // 이때 swap 방법은 javascript ES6 구조 분해 할당 구문
//           [data[j], data[j + 1]] = [data[j + 1], data[j]];

//           /**
//            * let tmp = data[j];
//            * data[j] = data[j + 1];
//            * data[j + 1] = tmp;
//            */
//         }
//       }
//     }

//     return data;
//   }
// }

// const bubbleSort = new BubbleSort();
// let arr = [28, 10, 14, 37, 8, 27];
// console.log(arr);
// let sortedArr = bubbleSort.sort(arr);
// console.log(sortedArr);

const advancedBubbleSort = new AdvancedBubbleSort();
let arr = [28, 10, 14, 37, 8, 27];
console.log(arr);
let sortedArr = advancedBubbleSort.sort(arr);
console.log(sortedArr);
