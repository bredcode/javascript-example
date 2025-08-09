class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  insertAt(idx, data) {
    let newNode = new Node(data, null);

    let count = 0;
    let cur = this.head;

    while (cur != null) {
      if (count == idx) {
        break;
      }

      cur = cur.next;
      count++;
    }

    newNode.next = cur.next;
    newNode.prev = cur;
    cur.next.prev = newNode;
    cur.next = newNode;

    this.size++;
  }

  search(data) {
    let idx = 1;
    let cur = this.head;

    while (cur != null) {
      if (cur.data == data) {
        console.log(`${idx}번째에 '${data}'가 있습니다.`);
        return;
      }
      cur = cur.next;
      idx++;
    }
    console.log(`'${data}'가 존재하지 않습니다.`);
  }

  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    let cur = this.head;
    while (cur != null) {
      if (cur.data == data) {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
      }
      cur = cur.next;
    }

    this.size--;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  print() {
    let cur = this.head;

    console.log(`=== 크기 : ${this.getSize()} ===`);
    while (cur != null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  reversePrint() {
    let cur = this.tail;

    console.log(`=== 크기 : ${this.getSize()} ===`);
    while (cur != null) {
      console.log(cur.data);
      cur = cur.prev;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertAt(1, "수");
linkedList.print();
linkedList.insertAt(2, "목");
linkedList.print();
linkedList.insertAt(1, "월");
linkedList.print();
linkedList.insertAt(2, "화");
linkedList.print();
linkedList.insertAt(5, "금");
linkedList.print();
linkedList.reversePrint();

linkedList.remove("수");
linkedList.reversePrint();
linkedList.remove("월");
linkedList.reversePrint();
linkedList.remove("금");
linkedList.reversePrint();
linkedList.remove("화");
linkedList.reversePrint();
linkedList.remove("목");
linkedList.reversePrint();
