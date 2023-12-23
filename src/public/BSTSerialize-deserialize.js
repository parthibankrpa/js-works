// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  // Serialize a binary tree to a string
  function serialize(root) {
    if (!root) {
      return 'null';
    }
    
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
  }
  
  // Deserialize a string to a binary tree
  function deserialize(data) {
    const values = data.split(',');
    function buildTree() {
      const val = values.shift();
      if (val === 'null') {
        return null;
      }
      const node = new TreeNode(parseInt(val));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
    
    return buildTree();
  }
  
  // Example usage:
  const root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(8);
  
  const serializedTree = serialize(root);
  console.log('Serialized Tree:', serializedTree);
  
  const deserializedTree = deserialize(serializedTree);
  console.log('Deserialized Tree:', deserializedTree);
  