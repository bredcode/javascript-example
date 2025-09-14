class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = {};

function insert(parent, child, position) {
  if (!tree[parent]) tree[parent] = new Node(parent);
  if (!tree[child]) tree[child] = new Node(child);

  if (position === "left") {
    tree[parent].left = tree[child];
  } else if (position === "right") {
    tree[parent].right = tree[child];
  }
}

function searchNode(node, value, trace) {
  if (!node) return false;

  trace.push(node.value);
  if (node.value === value) {
    console.log(trace);
    return true;
  }
  if (searchNode(node.left, value, trace)) return true;
  if (searchNode(node.right, value, trace)) return true;

  trace.pop();
  return false;
}

function deleteNode(value) {
  if (!tree[value]) return;

  for (let key in tree) {
    const node = tree[key];
    if (node?.left?.value === value) {
      node.left = null;
    }
    if (node?.right?.value === value) {
      node.right = null;
    }
  }

  delete tree[value];
}

// 삽입
insert("A", "B", "left");
insert("A", "C", "right");
insert("B", "D", "left");
insert("B", "E", "right");

searchNode(tree["A"], "A", []) ? console.log("A 찾음") : console.log("A 못찾음");
searchNode(tree["A"], "B", []) ? console.log("B 찾음") : console.log("B 못찾음");
searchNode(tree["A"], "E", []) ? console.log("E 찾음") : console.log("E 못찾음");
searchNode(tree["A"], "Z", []) ? console.log("Z 찾음") : console.log("Z 못찾음");

// 삭제
deleteNode("B");
searchNode(tree["A"], "B", []) ? console.log("B 찾음") : console.log("B 못찾음");
