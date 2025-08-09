class Graph {
  constructor() {
    this.size = 5;

    this.adj = Array.from({ length: this.size }, () => []);
  }

  get(from, to) {
    console.log(`[GET] : from = ${from} to = ${to}`);

    let vertex = this.adj[from].filter((elem) => elem.to == to); // 2개이상 시 리스트로 filtering
    vertex = vertex[0]; // 이 코드에서는 가정 상 1개만 나올것이기에 [0]인덱스 값이 결국 vertex

    if (vertex) {
      console.log(vertex.value);
    } else {
      console.log("Not found");
    }

    return vertex === undefined ? 0 : vertex.value;
  }

  set(from, to, value) {
    console.log(`[SET] : from = ${from} to = ${to} value = ${value}`);

    if (this.get(from, to) !== 0) {
      console.log("Already exists!");
    } else {
      this.adj[from].push({ to: to, value: value });
    }
  }

  remove(from, to) {
    console.log(`[REMOVE] : from = ${from} to = ${to}`);

    if (this.get(from, to) !== 0) {
      this.adj[from] = this.adj[from].filter((elem) => elem.to !== to);
    } else {
      console.log("Not found");
    }
  }

  print() {
    console.log(`[PRINT]`);
    console.log(this.adj);
  }

  clear() {
    console.log(`[CLEAR]`);
    this.adj = Array.from({ length: this.size }, () => []);
  }
}

const graph = new Graph();
console.log(graph.adj);

graph.set(0, 1, 1);
graph.set(0, 3, 1);
graph.set(0, 4, 1);
graph.set(3, 0, 1);
graph.set(3, 1, 1);
graph.set(3, 1, 2);

graph.print();

graph.get(0, 1);
graph.get(0, 2);

graph.print();
graph.remove(0, 2);
graph.print();

graph.remove(3, 1);
graph.print();

graph.clear();
graph.print();
