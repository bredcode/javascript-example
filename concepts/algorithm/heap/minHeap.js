class HeapSort {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log("=== heap ===");
    console.log(this.heap);
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[par] > this.heap[cur]) {
      [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];
      // let temp = this.heap[par];
      // this.heap[par] = this.heap[cur];
      // this.heap[cur] = temp;

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt === 0) {
      return;
    }

    const data = this.heap[1];

    this.heap[1] = this.heap[this.cnt];
    this.cnt -= 1;

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      if (child + 1 <= this.cnt && this.heap[child] > this.heap[child + 1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur] < this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const minHeap = new HeapSort(1000);

let arr = [10, 9, 8];
arr.forEach((elem) => {
  minHeap.push(elem);
});

console.log("=== print ===");
console.log(minHeap.print());

console.log("=== pop ===");
arr.forEach((elem) => {
  console.log(minHeap.pop());
});
