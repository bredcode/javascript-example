class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  insertLast(data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  insertAt(idx, data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    } else if (idx == 1) {
      this.insertFirst(data);
      return;
    }

    let cur = this.head;
    let count = 1;

    while (cur != null) {
      if (count + 1 == idx) {
        break;
      }

      cur = cur.next;
      count++;
    }

    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return;
    }

    let cur = this.head;
    this.head = this.head.next; // null
    cur.next = null;

    this.size--;
  }
  removeLast() {
    if (this.isEmpty()) {
      return;
    } else if (this.getSize() == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    let cur = this.head;

    while (cur != null) {
      if (cur.next == this.tail) {
        break;
      }

      cur = cur.next;
    }

    cur.next = null;
    this.tail = cur;

    this.size--;
  }
  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    let cur = this.head;
    if (cur.data == data) {
      // this.head.data == data 즉, 첫번째 데이터가 동일하다면
      this.head = cur.next;
    } else {
      while (cur != null) {
        // 이대로 값 검색이 안되고 끝까지 왔다면
        if (cur.next == null) {
          return;
        }
        if (cur.next.data == data) {
          break;
        }

        cur = cur.next;
      }

      cur.next = cur.next.next;
    }

    this.size--;
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

  print() {
    let cur = this.head;

    console.log(`=== 크기 : ${this.getSize()} ===`);
    while (cur != null) {
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

const linkedList = new LinkedList();

linkedList.insertFirst("화");
linkedList.print();
linkedList.insertFirst("월");
linkedList.print();
linkedList.insertLast("금");
linkedList.print();
linkedList.insertAt(3, "목");
linkedList.print();
linkedList.insertAt(3, "수");
linkedList.print();

linkedList.search("월");
linkedList.search("화");
linkedList.search("수");
linkedList.search("목");
linkedList.search("금");
linkedList.search("토");
linkedList.search("일");

linkedList.remove("일");
linkedList.print();
linkedList.remove("화");
linkedList.print();
linkedList.remove("목");
linkedList.print();
linkedList.remove("수");
linkedList.print();
linkedList.remove("월");
linkedList.print();
linkedList.remove("금");
linkedList.print();
linkedList.remove("토");
linkedList.print();
