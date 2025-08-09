class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Parent -> Left -> Right
  preorder(cur) {
    if (cur == null) {
      return;
    }

    console.log(cur.data);
    this.preorder(cur.left);
    this.preorder(cur.right);
  }

  // Left -> Parent -> Right
  inorder(cur) {
    if (cur == null) {
      return;
    }

    this.inorder(cur.left);
    console.log(cur.data);
    this.inorder(cur.right);
  }

  // Left -> Right -> Parent
  postorder(cur) {
    if (cur == null) {
      return;
    }

    this.postorder(cur.left);
    this.postorder(cur.right);
    console.log(cur.data);
  }
}

/**
 *   P
 * L   R
 */
const binaryTree = new BinaryTree();

binaryTree.root = new Node("A");
binaryTree.root.left = new Node("B");
binaryTree.root.right = new Node("C");
binaryTree.root.left.left = new Node("D");
binaryTree.root.left.right = new Node("E");
binaryTree.root.right.left = new Node("F");
binaryTree.root.right.right = new Node("G");
binaryTree.root.right.left.left = new Node("L");
binaryTree.root.right.left.right = new Node("M");

console.log("=== preorder ===");
binaryTree.preorder(binaryTree.root);
console.log("=== inorder ===");
binaryTree.inorder(binaryTree.root);
console.log("=== postorder ===");
binaryTree.postorder(binaryTree.root);
