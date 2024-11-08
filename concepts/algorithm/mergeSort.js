class MergeSort {
  merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
      // left와 right 중 첫번째 값이 작은 것 부터 순서대로 sortedArr에 push하면서 정렬하는 과정
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }

    // 만약 left가 [1,2] right가 [3,4]인 경우
    // left는 위의 while문에서 모두 sortedArr에 push가 된 상황
    // 그러나 right는 하나도 push가 안된 상황
    // 따라서 아래와 같이 spread syntax를 통해 모두 다 붙여주는 과정을 통해 retrun을 해줍니다.
    // 이때 무조건 left 혹은 right 둘 중 하나의 배열에만 원소가 남게 됩니다.
    return [...sortedArr, ...left, ...right];
  }
  sort(data) {
    // 배열의 길이가 1이될때까지 계속해서 재귀적으로 분할
    if (data.length === 1) {
      return data;
    }

    /**
     * [1,2,3,4,5,6,7]
     * mid = Math.ceil(7/2) = 4
     * left = data.slice(0, mid) = [1,2,3,4]
     * right = data.slice(mid) = [5,6,7]
     */
    const mid = Math.ceil(data.length / 2);

    const left = data.slice(0, mid);
    const right = data.slice(mid);

    /**
     * 원소가 1개가 될 때 까지 재귀를 통해서 계속 진행한 후, left와 right부터 하나씩 merge를 해 나가는 방식
     * [4,3,2,1]이 있을 때
     * sort함수 재귀에 의해 [4] [3] [2] [1]이 되고
     * [4] [3]과 [2] [1]이 merge함수를 타면 [3,4] [1,2]가 될것이고
     * [3,4]와 [1,2]가 merge함수를 타면 [1,2,3,4]기 될것이다.
     */
    return this.merge(this.sort(left), this.sort(right));
  }
}

const mergeSort = new MergeSort();
let arr = [29, 10, 14, 37, 8, 27];
console.log(arr);
let sortedArr = mergeSort.sort(arr);
console.log(sortedArr);
