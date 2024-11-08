class QuickSort {
  sort(data, start, end) {
    if (start == end) {
      return;
    }

    let left = start;
    let right = end;

    let pivot = data[left];

    // 오른쪽 값이 pivot보다 작으면 pivot 왼쪽으로, 왼쪽 값이 pivot보다 크면 pivot 오른쪽으로
    while (left < right) {
      // 피벗값보다 right 값이 큰 경우에는 right가 왼쪽으로 이동
      while (data[right] >= pivot && right > left) {
        right--;
      }

      // 그렇지 않은 경우에는 left 위치에 right 값을 대입
      data[left] = data[right];

      // 피벗값보다 left값이 작은 경우에는 left가 오른쪽으로 이동
      while (data[left] <= pivot && left < right) {
        left++;
      }

      // 그렇지 않은 경우에는 right 위치에 left 값을 대입
      data[right] = data[left];

      //left와 right가 만나는 지점이 pivot값이 들어가는 위치
      if (left == right) {
        data[left] = pivot; // arr[right] = pivot
        this.sort(data, start, right - 1);
        this.sort(data, left + 1, end);
      }
    }

    return data;
  }
}

const quickSort = new QuickSort();
let arr = [6, 2, 3, 8, 4, 5, 1, 7];
console.log(arr);

let sortedArr = quickSort.sort(arr, 0, arr.length - 1);
console.log(sortedArr);
