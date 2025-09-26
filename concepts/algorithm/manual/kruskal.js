class UnionFind {
  constructor(N) {
    // Make 과정
    this.parent = Array.from({ length: N + 1 }, (elem, idx) => idx);
    this.cost = 0;
  }

  find(u) {
    if (u == this.parent[u]) {
      return u;
    }

    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v, val) {
    console.log(`u : ${u} v : ${v}`);
    u = this.find(u);
    v = this.find(v);

    if (u == v) {
      return;
    }

    console.log("merge 성공");
    this.parent[v] = u;
    this.cost += val;
  }
}

let [N, M] = [6, 9];
let input = [
  // u, v, val (a, b, c)
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

let unionFind = new UnionFind(N);

// 간선의 가중치가 작은 순으로 즉, 오름차순 정렬을 해준다.
console.log("전 : ", input);
input.sort((a, b) => a[2] - b[2]);
console.log("후 : ", input);

input.forEach((elem) => {
  unionFind.merge(elem[0], elem[1], elem[2]);
});

console.log(unionFind.cost);
