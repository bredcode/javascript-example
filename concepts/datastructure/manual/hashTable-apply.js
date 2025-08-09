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

    let hash1 = this.hashing1(key);
    let hash2 = this.hashing2(key);

    this.bucket[hash1].push({ subHash: hash2, name: key, phoneNumber: value });
  }

  get(key) {
    console.log(`[GET] key : ${key}`);

    let hash1 = this.hashing1(key);
    let hash2 = this.hashing2(key);

    let len = this.bucket[hash1].length;
    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash1][i].subHash, hash2)) {
        if (this.bucket[hash1][i].name == key) {
          console.log(this.bucket[hash1][i]);
          return;
        }
      }
    }

    console.log("찾는 값이 없습니다.");
  }

  del(key) {
    console.log(`[DEL] key : ${key}`);

    let hash1 = this.hashing1(key);
    let hash2 = this.hashing2(key);

    let len = this.bucket[hash1].length;

    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash1][i].subHash, hash2)) {
        if (this.bucket[hash1][i].name == key) {
          this.bucket[hash1].splice(i, 1);
          return;
        }
      }
    }

    console.log("지울 값이 없습니다.");
  }

  hashing1(key) {
    // 각자리 ascii 값 다 더해서 버킷 사이즈로 나눈 값 : hashing value
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret += key[i].charCodeAt();
    }

    ret = ret % this.size;

    return ret;
  }

  hashing2(key) {
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret = ret * 8 + key[i].charCodeAt();
    }

    ret = ret % this.size;

    return ret;
  }
  isEmpty(data) {
    return JSON.stringify(data) == JSON.stringify([]);
  }
  isSame(d1, d2) {
    return !this.isEmpty() && d1 == d2;
  }
  print() {
    console.log("=== print ===");
    console.log(this.bucket);
  }
}

const hashMap = new HashMap();

hashMap.set("john", 1);
hashMap.print();
hashMap.set("brad", 2);
hashMap.print();
hashMap.set("kaiz", 3);
hashMap.set("olivia", 4);
hashMap.set("lily", 5);
hashMap.set("zoe", 6);
hashMap.set("ava", 7);
hashMap.print();

hashMap.get("kaiz");

hashMap.get("lily");
hashMap.get("zoe");

hashMap.print();
hashMap.del("zoe");
hashMap.print();
hashMap.del("brad");
hashMap.print();

/**
 * 버킷이 6개짜리로 했는데
 * 총 1억개의 버킷을 만드는데
 * 메모리 공간이 1억개 필요
 *
 * 두개 해싱을 하면
 * 10000개 10000개짜리 해싱으로 바꿀 수 있고 -> 20000개
 * hash1 -> 10000개
 * hash2 -> 10000개
 */
