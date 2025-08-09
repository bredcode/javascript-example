class Heap {
  constructor(size) {
    this.size = size;
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log("=== Max Heap ===");
    console.log(this.heap);
  }

  push(data) {
    // 1번 인덱스부터 데이터를 넣을 예정이니
    this.heap[++this.cnt] = data;

    // 자식과 부모에 대해 설정
    let cur = this.cnt;
    let par = Math.floor(cur / 2); // 현재 노드 인덱스의 * 2 -> 왼쪽 자식 노드, 현재 노드 인덱스의 * 2 + 1 -> 오른쪽 자식 노드
    // 3-> cur / 2 = > 1.5
    // 현재 위치보다 부모가 더 작은 값이면 -> 최대 힙의 정의에 따라 SWAP
    // 왜냐면 늘 최대 힙은, 서브트리에서 부모가 자식노드보다 크거나 같아야함.
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
    const data = this.heap[1];

    // 힙의 가장 마지막 값을 루트로 가져온다.
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      // 최대 힙 정의에 따라 현제 자식 중 더 큰 값으로 이동
      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      // 더이상 swap을 하지 않아도 되는 경우
      if (child > this.cnt || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const maxHeap = new Heap(11); // 0번 인덱스는 안쓰는 것이니까 10개의 힙 공간을 만들려면 11개의 크기를 주어야 한다.

maxHeap.push(2);
maxHeap.print();
maxHeap.push(1);
maxHeap.print();
maxHeap.push(4);
maxHeap.print();
maxHeap.push(3);
maxHeap.print();

console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();

maxHeap.push(4);
maxHeap.print();
