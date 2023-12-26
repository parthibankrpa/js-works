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

  // Function to calculate the height of the tree
  height(node) {
    if (node === null) {
      return -1; // Height of an empty tree is -1
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // Return the maximum height of left or right subtree plus 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Create a sample binary tree
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

// Calculate and display the height of the tree
const treeHeight = tree.height(tree.root);
console.log(`The height of the tree is: ${treeHeight}`);
