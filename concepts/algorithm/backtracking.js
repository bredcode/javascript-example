// 최소 2개의 자음과 최소 1개의 모음이 있나요?
function checkCondition(ans) {
  let ja = 0;
  let mo = 0;

  ans.forEach((ch) => {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      mo++;
    } else {
      ja++;
    }
  });

  return ja >= 2 && mo >= 1;
}

function backtracking(alpha, N, cur, ans) {
  if (ans.length == N) {
    if (checkCondition(ans)) {
      console.log(ans);
    }
    return;
  }

  let len = alpha.length;
  for (let i = cur; i < len; i++) {
    ans.push(alpha[i]);
    backtracking(alpha, N, i + 1, ans);
    ans.pop();
  }
}

let [N, M] = [4, 6];
let alpha = ["a", "t", "c", "i", "s", "w"];
alpha = alpha.sort();

backtracking(alpha, N, 0, []);

// function backtracking(N, M, visit, ans) {
//   // 수의 길이가 M일때 출력
//   if (ans.length == M) {
//     console.log(ans);
//     return;
//   }

//   // 1~N까지의 수
//   for (let i = 1; i <= N; i++) {
//     // 더이상 해가 될수 없는 영역, 가지치기
//     if (visit[i]) {
//       // 12, 13
//       continue;
//     }

//     ans.push(i);
//     visit[i] = 1;
//     backtracking(N, M, visit, ans);
//     visit[i] = 0;
//     ans.pop();
//   }
// }

// let [N, M] = [5, 3];

// // 중복해서 사용하는지 체크 visit
// let visit = Array.from({ length: N + 1 }, () => 0);
// backtracking(N, M, visit, []);
