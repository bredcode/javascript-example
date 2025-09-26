class HeapSort {
  constructor(size) {
    this.heap = Array.from({ lenght: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log("=== heap ===");
    console.log(this.heap);
  }

  push(data) {
    // 1번 인덱스부터 넣어야 하기에 ++cnt
    this.heap[++this.cnt] = data;

    // 자식과 부모관계 설정
    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    // 현재 위치보다 부모가 더 작으면 -> 최대힙 정의에 따라 스왑
    // (왜냐면 늘 부모노드가 자식 서브트리보다 값이 커야함)
    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt == 0) {
      return null;
    }

    // 루트 데이터를 pop
    let data = this.heap[1];
    // 힙의 가장 마지막 데이터를 루트로 가져온다.
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;
      // 최대힙 정의에 따라 형제 자식 중 더 큰 값으로 선택
      if (child + 1 <= this.cnt && this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      // 더이상 swap하지 않아도 되는 경우
      if (child > this.cnt || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}
const maxHeapSort = new HeapSort(100);

let arr = [29, 10, 14, 37, 8, 27];
arr.forEach((elem) => maxHeapSort.push(elem));
maxHeapSort.print();

arr.forEach((elem) => console.log(maxHeapSort.pop()));
