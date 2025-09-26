class TopologicalSort {
  constructor() {
    //this.N = 9; // 1~8
    this.N = 5;
    this.graph = Array.from({ length: this.N }, () => {
      return [];
    });

    // 진입차수를 적기 위한 배열 생성
    this.indegree = Array.from({ length: this.N }, () => 0);
  }

  createGraph() {
    /**
     * 1 : C, 2 : 프로그래밍1, 3 : C++, 4 : Java,
     * 5 : 프로그래밍2, 6 : Spring, 7 : 자료구조, 8 : 알고리즘
     */
    // this.graph[1].push(2);
    // this.indegree[2]++;
    // this.graph[1].push(3);
    // this.indegree[3]++;
    // this.graph[1].push(4);
    // this.indegree[4]++;
    // this.graph[2].push(5);
    // this.indegree[5]++;
    // this.graph[3].push(7);
    // this.indegree[7]++;
    // this.graph[4].push(6);
    // this.indegree[6]++;
    // this.graph[4].push(7);
    // this.indegree[7]++;
    // this.graph[5].push(7);
    // this.indegree[7]++;
    // this.graph[7].push(8);
    // this.indegree[8]++;

    // console.log("graph : ", this.graph);
    // console.log("indegree : ", this.indegree);

    this.graph[1].push(2);
    this.indegree[2]++;
    this.graph[2].push(3);
    this.indegree[3]++;
    this.graph[3].push(4);
    this.indegree[4]++;
    this.graph[4].push(2);
    this.indegree[2]++;

    console.log("graph : ", this.graph);
    console.log("indegree : ", this.indegree);
  }

  sort() {
    let result = [];
    let queue = [];

    // 진입 차수가 0인 정점을 모두 queue에 담는다.
    for (let v = 1; v <= this.N; v++) {
      if (this.indegree[v] == 0) {
        queue.push(v);
      }
    }

    // 정점의 수 만큼 반복, 위상정렬은 정점의 수만큼 반복하기 전에 큐가 비면 사이클 존재 혹은 에러
    // 수만큼 반복을 해야 위상 정렬의 결과를 얻을 수 있다.
    // 1,2,3 / 1 -> 2 -> 3
    for (let v = 1; v < this.N; v++) {
      // 큐가 비어있으면 위상 정렬을 할 수 없다.
      console.log("graph : ", this.graph);
      console.log("indegree : ", this.indegree);
      if (queue.length == 0) {
        console.log("위상 정렬을 할 수 없습니다.");
        return;
      }

      // 정점을 큐에서 꺼낸다.
      let cur = queue.shift(); // [1,2,3] shift() -> [2,3] 1 return

      // 큐에서 꺼낸 순서대로가 항상 위상 정렬의 결과 값
      result.push(cur);

      // 현재 위치에서 다음 정점으로 갈 수 있는 위치를 탐색
      let len = this.graph[cur].length;
      for (let nv = 0; nv < len; nv++) {
        let next = this.graph[cur][nv];

        // 간선을 지우는 과정, 진입 차수를 -1 해줍니다.
        this.indegree[next]--;

        // 진입 차수가 0이 되면 큐에 담아준다.
        if (this.indegree[next] == 0) {
          queue.push(next);
        }
      }
    }

    return result;
  }
}

const topologicalSort = new TopologicalSort();
topologicalSort.createGraph();
let result = topologicalSort.sort();

console.log(result);
