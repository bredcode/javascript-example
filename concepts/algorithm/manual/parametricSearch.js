let [N, K] = [5, 3];
let home = [1, 2, 8, 4, 9];

home = home.sort((a, b) => a - b);

// 전봇대의 최소/최대 거리를 정의
let start = 1;
let end = home[N - 1] - home[0];

let ans = 0;
while (start <= end) {
  // mid : 해당 거리를 최대로 전봇대를 설치할 수 있는지?
  let mid = Math.floor((start + end) / 2);

  // 전봇대를 mid 거리로 설치해본다.
  // 이 로직이, 파라매트릭 서치의 검증 로직에 O(M)
  let s = 0;
  let e = 1;
  let cnt = 1;

  while (e <= N - 1) {
    if (home[e] - home[s] >= mid) {
      cnt++;
      s = e;
    }
    e++;
  }

  // 만약에 해당 거리를 최대라 가정하고 전봇대 설치가 가능했다면, 크기를 더 키워본다.
  if (cnt >= K) {
    start = mid + 1;
    ans = Math.max(ans, mid);
  } else {
    end = mid - 1;
  }
}

console.log(ans);
