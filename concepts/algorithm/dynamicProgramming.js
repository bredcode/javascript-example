// let N = 2; // 3
// // let N = 12; // 2731

// let dp = Array.from({ length: N + 1 }, () => 0);

// // dp[n] : 2*n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수
// dp[1] = 1; // 1*2 1개
// dp[2] = 3; // 1*2 2개 혹은 2*1 2개 혹은 2*2 1개

// for (let i = 3; i <= N; i++) {
//   dp[i] = dp[i - 1] + dp[i - 2] * 2;
// }

// console.log(dp[N]);

let N = 5;
let M = 5;

let arr = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0],
];

// dp[y][x] = y,x번째에서 만들 수 있는 정사각형의 최대 길이
let dp = Array.from({ length: N + 1 }, () => {
  return Array.from({ length: M + 1 }, () => 0);
});

let ans = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    if (arr[i][j]) {
      // arr[i][j] = 0이면 최대 정사각형을 만들 수 없는 자리기 때문에 무시
      // 왼쪽, 위, 윗대각선 중 최솟값 + 1
      dp[i][j] =
        Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;

      ans = Math.max(dp[i][j], ans);
    }
  }
}

console.log(ans);
