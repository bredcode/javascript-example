class HashMap {
  constructor() {
    // 1번 방법
    this.bucket = [];
    this.size = 6;
    this.bucket.length = this.size;
    this.bucket = this.bucket.fill(null).map((elem) => ({}));

    // 2번 방법
    // this.size = 6;
    // this.bucket = Array.from({ length: this.size }, () => ({}));
  }

  set(key, value) {
    console.log(`[SET] key : ${key} value : ${value}`);

    let hash = this.hashing(key); // kaiz -> hash : 5

    if (this.isEmpty(this.bucket[hash])) {
      this.bucket[hash] = { name: key, phoneNumber: value };
      return;
    }

    console.log(`충돌이 일어났습니다 : ${this.bucket[hash].name}`);
    for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다 : ${i}`);

      if (this.isEmpty(this.bucket[i])) {
        this.bucket[i] = { name: key, phoneNumber: value };
        return;
      }
    }

    console.log("버킷이 가득 찼습니다.");
  }

  get(key) {
    console.log(`[GET] key : ${key}`);

    let hash = this.hashing(key);

    if (this.isSame(this.bucket[hash].name, key)) {
      console.log(this.bucket[hash]);
      return;
    }

    console.log(`충돌이 일어났습니다. ${this.bucket[hash].name}`);
    for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다 : ${i}`);
      if (this.isSame(this.bucket[i].name, key)) {
        console.log(this.bucket[i]);
        return;
      }
    }

    console.log("찾는 값이 없습니다.");
  }

  del(key) {
    console.log(`[DEL] key : ${key}`);

    let hash = this.hashing(key);

    if (this.isSame(this.bucket[hash].name, key)) {
      this.bucket[hash] = {};
      return;
    }

    console.log(`충돌이 일어났습니다. ${this.bucket[hash].name}`);
    for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다 : ${i}`);
      if (this.isSame(this.bucket[i].name, key)) {
        this.bucket[i] = {};
        return;
      }
    }

    console.log("지울 값이 없습니다.");
  }

  hashing(key) {
    // hash function : string 각 자리 값을 ascii 코드 값으로 모두 더한 뒤 버킷 사이즈로 나눈 값 : hashing value
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret += key[i].charCodeAt();
    }

    ret = ret % this.size;

    return ret;
  }

  print() {
    console.log("=== print ===");
    console.log(this.bucket);
  }

  isEmpty(data) {
    return JSON.stringify(data) == JSON.stringify({});
  }

  isSame(d1, d2) {
    return !this.isEmpty() && d1 == d2;
  }
}

const hashMap = new HashMap();
console.log(hashMap.bucket);

hashMap.set("john", 1);
hashMap.print();

hashMap.set("brad", 2);
hashMap.print();

hashMap.set("kaiz", 3);
hashMap.print();

hashMap.set("olivia", 4);
hashMap.print();

hashMap.set("lily", 5);
hashMap.print();

hashMap.set("zoe", 5);
hashMap.print();

hashMap.set("ava", 6);
hashMap.print();

hashMap.get("brad");
hashMap.get("ava");
hashMap.get("zoe");
hashMap.get("code");

hashMap.del("brad");
hashMap.print();
hashMap.del("ava");
hashMap.print();
hashMap.del("zoe");
hashMap.print();
hashMap.del("code");
hashMap.print();
hashMap.del("john");
hashMap.print();

hashMap.del("kaiz");
hashMap.print();
