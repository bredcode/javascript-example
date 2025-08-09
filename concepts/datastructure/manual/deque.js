class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;

    this.size = 0;
  }

  pushFront(data) {
    let newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;

      this.size++;
      return;
    }

    this.front.prev = newNode;
    newNode.next = this.front;
    this.front = newNode;
    this.size++;
  }

  pushRear(data) {
    let newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;

      this.size++;
      return;
    }

    this.rear.next = newNode;
    newNode.prev = this.rear;
    this.rear = newNode;
    this.size++;
  }

  popFront() {
    let cur = this.front;

    if (this.isEmpty()) {
      console.log("덱이 비었습니다.");
      return;
    }
    if (this.getSize() == 1) {
      this.front = null;
      this.rear = null;

      this.size--;
      console.log(`Pop Front : ${cur.data}`);
      return;
    }
    this.front = this.front.next;
    this.front.prev = null;
    this.size--;

    console.log(`Pop Front : ${cur.data}`);
  }

  popRear() {
    let cur = this.rear;

    if (this.isEmpty()) {
      console.log("덱이 비었습니다.");
      return;
    }
    if (this.getSize() == 1) {
      this.front = null;
      this.rear = null;

      this.size--;
      console.log(`Pop Rear : ${cur.data}`);
      return;
    }

    this.rear = this.rear.prev;
    this.rear.next = null;
    this.size--;

    console.log(`Pop Rear : ${cur.data}`);
  }

  print() {
    let cur = this.front;

    console.log(`크기 : ${this.getSize()}`);
    while (cur != null) {
      console.log(cur.data + " ");
      cur = cur.next;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

const deque = new Deque();

deque.pushRear("화");
deque.print();
deque.pushRear("수");
deque.print();
deque.pushFront("월");
deque.print();
deque.pushRear("목");
deque.print();
deque.pushRear("금");
deque.print();
deque.pushRear("토");
deque.print();
deque.pushRear("일");
deque.print();

deque.popFront();
deque.print();

deque.popRear();
deque.print();
deque.popFront();
deque.print();

deque.popRear();
deque.print();

deque.popFront();
deque.print();

deque.popRear();
deque.print();

deque.popFront();
deque.print();

deque.popRear();
deque.print();

// let deque = [];

// function pushFront(data) {
//   deque.unshift(data);
// }

// function pushRear(data) {
//   deque.push(data);
// }

// function popFront() {
//   if (isEmpty()) {
//     console.log("덱이 비었습니다.");
//     return;
//   }
//   let ret = deque.shift();
//   console.log(`popFront : ${ret}`);
// }

// function popRear() {
//   if (isEmpty()) {
//     console.log("덱이 비었습니다.");
//     return;
//   }
//   let ret = deque.pop();
//   console.log(`popRear : ${ret}`);
// }

// function print() {
//   console.log(`크기 : ${getSize()}`);
//   console.log(deque);
// }

// function getSize() {
//   return deque.length;
// }

// function isEmpty() {
//   return !deque.length;
// }

// pushFront("화");
// print();

// pushFront("월");
// print();

// pushRear("수");
// print();

// pushRear("목");
// print();

// pushRear("금");
// print();

// pushRear("토");
// print();

// pushRear("일");
// print();

// popFront();
// print();
// popRear();
// print();
// popFront();
// print();
// popRear();
// print();
// popFront();
// print();
// popRear();
// print();

// popFront();
// print();
// popRear();
// print();
