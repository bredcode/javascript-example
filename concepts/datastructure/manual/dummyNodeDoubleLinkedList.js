class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DummyNodeDoubleLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  insertAt(idx, data) {
    let newNode = new Node(data, null, null);

    let count = 0; // 몇 번째인지 확인하기 위함
    let cur = this.head;

    while (cur != null) {
      // cur != tail
      if (count == idx) {
        // 월 수 있을때 2번째에 화요일을 넣고자한다.
        break;
      }

      cur = cur.next;
      count++;
    }

    newNode.prev = cur.prev;
    newNode.next = cur;

    cur.prev.next = newNode;
    cur.prev = newNode;

    this.size++;
  }

  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    let cur = this.head;
    while (cur != null) {
      // cur != tail
      if (cur.data == data) {
        cur.prev.next = cur.next; // 화->prev = 월->next를 수요일로
        cur.next.prev = cur.prev;

        cur.next = null;
        cur.prev = null;
      }

      cur = cur.next;
    }

    this.size--;
  }

  search(data) {
    let count = 0;
    let cur = this.head;

    while (cur != null) {
      if (cur.data == data) {
        console.log(`${count}번째에 ${data}가 있습니다.`);
        return;
      }

      cur = cur.next;
      count++;
    }

    console.log(`'${data}'가 존재하지 않습니다.`);
  }

  print() {
    let cur = this.head;

    console.log(`=== 크기 : ${this.getSize()} ===`);
    while (cur != null) {
      // cur != tail
      console.log(cur.data);
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

const dummyNodeDoubleLinkedList = new DummyNodeDoubleLinkedList();

dummyNodeDoubleLinkedList.insertAt(1, "월");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(2, "수");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(2, "화");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(4, "목");
dummyNodeDoubleLinkedList.insertAt(5, "금");
dummyNodeDoubleLinkedList.print();

dummyNodeDoubleLinkedList.search("월");
dummyNodeDoubleLinkedList.search("금");
dummyNodeDoubleLinkedList.search("수");
dummyNodeDoubleLinkedList.search("토");

dummyNodeDoubleLinkedList.remove("수");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("월");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("금");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("목");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("화");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("일");
dummyNodeDoubleLinkedList.print();
