class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.size = 0;
  }

  insert(idx, data) {
    let newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.head.next = newNode;
      this.head.prev = newNode;

      newNode.next = this.head;
      newNode.prev = this.head;

      this.size++;
      return;
    }

    /**
     * ㅁㅡ ㅁ
     *  |   |
     * ㅁㅡ ㅁ
     */
    let cur = this.head;
    let count = 0;

    let isStart = false;
    while (!isStart || cur != this.head) {
      isStart = true;

      if (count == idx) {
        break;
      }

      cur = cur.next;
      count++;
    }

    newNode.next = cur; // 화->next = 수
    newNode.prev = cur.prev; // 화->prev = 수->prev (== 월)

    cur.prev.next = newNode; // 월->next = 화
    cur.prev = newNode; // 수->prev = 화

    this.size++;
  }

  remove(data) {
    if (this.getSize() == 1) {
      this.head.next = this.head;
      this.head.prev = this.head;

      this.size--; // this.size = 0;
      return;
    }

    let cur = this.head;
    /**
     * h,cㅁㅡ ㅁ
     *    |   |
     *   ㅁㅡ ㅁ
     */
    let isStart = false;
    while (!isStart || cur != this.head) {
      isStart = true;

      if (cur.data == data) {
        break;
      }
      cur = cur.next;
    }

    cur.prev.next = cur.next; // 월->next = 수
    cur.next.prev = cur.prev; // 수->prev = 월

    this.size--;
  }
  search(data) {
    let cur = this.head;
    let count = 0;

    let isStart = false;
    while (!isStart || cur != this.head) {
      isStart = true;

      if (cur.data == data) {
        console.log(`${count}번째에 '${data}'가 있습니다.`);
        return;
      }

      cur = cur.next;
      count++;
    }

    console.log(`'${data}'가 존재하지 않습니다.`);
  }

  print() {
    let cur = this.head;

    let isStart = false;
    while (!isStart || cur != this.head) {
      isStart = true;
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

const circularLinkedList = new CircularLinkedList();

circularLinkedList.insert(1, "화");
circularLinkedList.print();
circularLinkedList.insert(1, "월");
circularLinkedList.print();
circularLinkedList.insert(3, "목");
circularLinkedList.print();
circularLinkedList.insert(3, "수");
circularLinkedList.print();

circularLinkedList.search("월");
circularLinkedList.search("화");
circularLinkedList.search("수");
circularLinkedList.search("목");
circularLinkedList.search("금");

circularLinkedList.remove("목");
circularLinkedList.print();
circularLinkedList.remove("화");
circularLinkedList.print();
circularLinkedList.remove("월");
circularLinkedList.print();
circularLinkedList.remove("수");
circularLinkedList.print();
circularLinkedList.remove("금");
circularLinkedList.print();
