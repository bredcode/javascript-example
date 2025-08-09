class HashMap {
  constructor() {
    // 1번
    this.bucket = [];
    this.size = 6;
    this.bucket.length = this.size;
    this.bucket = this.bucket.fill(null).map((elem) => []);

    // 2번
    // this.size = 6;
    // this.bucket = Array.from({ length: this.size }, () => []);
  }

  set(key, value) {
    console.log(`[SET] key : ${key} value : ${value}`);

    let hash = this.hasing(key);
    this.bucket[hash].push({ name: key, phoneNumber: value });
  }

  get(key) {
    console.log(`[GET] key : ${key}`);

    let hash = this.hasing(key);

    let len = this.bucket[hash].length;
    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash][i].name, key)) {
        console.log(this.bucket[hash][i]);
        return;
      }
    }

    console.log("찾는 값이 없습니다.");
  }

  del(key) {
    console.log(`[DEL] key : ${key}`);

    let hash = this.hasing(key);

    let len = this.bucket[hash].length;
    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash][i].name, key)) {
        this.bucket[hash].splice(i, 1);
        return;
      }
    }

    console.log("지울 값이 없습니다.");
  }

  hasing(key) {
    // 각자리 ascii값 다 더해서 bucket 사이즈로 나눈 나머지가 hashing value
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
    return JSON.stringify(data) == JSON.stringify([]);
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
hashMap.set("zoe", 6);
hashMap.print();
hashMap.set("ava", 7);
hashMap.print();
hashMap.set("aaa", 7);
hashMap.print();
hashMap.set("bbb", 7);
hashMap.print();
hashMap.set("ccc", 7);
hashMap.print();
hashMap.set("ddd", 7);
hashMap.print();

hashMap.get("john");
hashMap.get("zoe");
hashMap.get("ava");
hashMap.get("lily");
hashMap.get("lylic");

hashMap.print();
hashMap.del("bbb");
hashMap.print();

hashMap.del("kaiz");
hashMap.print();

hashMap.del("brad");
hashMap.print();

hashMap.del("brady");
hashMap.print();
