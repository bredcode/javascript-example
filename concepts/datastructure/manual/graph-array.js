class Graph {
  constructor() {
    this.size = 5;

    this.adj = Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => 0)
    );
  }
  get(from, to) {
    console.log(`[GET] : from = ${from} to = ${to}`);

    if (this.adj[from][to] !== 0) {
      console.log(this.adj[from][to]);
    } else {
      console.log("Not found");
    }
  }

  set(from, to, value) {
    console.log(`[SET] : from = ${from} to = ${to} value = ${value}`);

    if (this.adj[from][to] !== 0) {
      console.log("Already exists!");
    } else {
      // 방향 그래프 경우
      this.adj[from][to] = value;

      // 무방향 그래프 경우
      // this.adj[to][from] = value;
    }
  }

  remove(from, to) {
    console.log(`[REMOVE] : from = ${from} to = ${to}`);

    if (this.adj[from][to] !== 0) {
      this.adj[from][to] = 0;
    } else {
      console.log("Not found!");
    }
  }

  print() {
    console.log(`[PRINT]`);
    console.log(this.adj);
  }

  clear() {
    console.log(`[CLEAR]`);
    this.adj = Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => 0)
    );
  }
}

const graph = new Graph();

graph.set(0, 1, 1);
graph.set(0, 3, 1);
graph.set(0, 4, 1);
graph.set(3, 0, 1);
graph.set(3, 1, 1);

graph.print();

graph.get(0, 1);
graph.get(0, 2);
graph.get(0, 21);

graph.remove(0, 2);
graph.print();
graph.remove(0, 1);
graph.print();

graph.clear();
graph.print();
