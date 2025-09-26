class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const tree = {};

function insert(parent, child, position) {
  if (!tree[parent]) {
    tree[parent] = new Node(parent);
  }
  if (!tree[child]) {
    tree[child] = new Node(child);
  }

  if (position === "left") {
    tree[parent].left = tree[child];
  } else if (position === "right") {
    tree[parent].right = tree[child];
  }
}

function travarsel(node) {
  if (!node) {
    return;
  }

  console.log(node.value);
  travarsel(node.left);
  travarsel(node.right);
  return;
}

// parent, child, position

insert("A", "B", "left");
insert("A", "C", "right");
insert("B", "D", "left");
insert("B", "E", "right");

travarsel(tree["A"]);
