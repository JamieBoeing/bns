class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
        this.height = 1
    // a node has data, left, and right pointers
    // a node also has a height property that starts at 1
    // left and right are intialized as null
    }
}
class AVLTree {
    constructor(){
        this.root = null
        // when a new Tree is made, it has a root property
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
          this.root = newNode;
        } else {
          this.insertNode(this.root, newNode);
        }
        return this;
      }
    
      insertNode(node, newNode) {
        if (newNode.data < node.data) {
          if (!node.left) {
            node.left = newNode;
          } else {
            this.insertNode(node.left, newNode);
          }
        } else if (newNode.data > node.data) {
          if (!node.right) {
            node.right = newNode;
          } else {
            this.insertNode(node.right, newNode);
          }
        } else {
          // If data is equal to current node's data, we don't allow duplicates.
          return;
        }
    
        // Update the height of the current node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    
        // Check and balance the tree
        this.balance(node);
      
        // add a new Node to the tree, with data as the Node's data
        // insertion starts the same way as in a regular Binary Tree
        // once the node is inserted, however, check the heights for imbalance
        // if the new node causes imbalance, perform rotations to rebalance
    }
    setHeight(node){
        if(!node) {
            return 0
        }
        return node.height
        // calculate and set the height property of the given node
        // the height is the maximum between the left and right children heights plus 1
        // the height of a node without any further nodes is 1
    }
    balance(node) {
        const balanceNode = this.getBalanceNode(node)

        if(balanceNode > 1) {
            if(this.getBalanceNode(node.left) >= 0) {
                this.rotateRight(node)
            } else {
                this.rotateLeft(node.left)
                this.rotateRight(node)
            }
        } else if (balanceNode < -1) {
            if(this.getBalanceNode(node.right) <= 0) {
                this.rotateLeft(node)
            } else {
                this.rotateRight(node.right)
                this.rotateLeft(node)
            }

        }
    }
    rotateRight(node){
        const newRoot = node.left
        node.left = newRoot.right
        newRoot.right = node

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))
        // rotate the given node to the right
        if(this.balance.root === node) {
            this.root = newRoot
        }
    }   
    rotateLeft(node){
        const newRoot = node.right
        node.right = newRoot.left
        newRoot.left = node
        // rotate the given node to the left
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))
        
        if(this.balance.root === node) {
            this.root = newRoot
        }
    }
}

module.exports = {
    Node,
    AVLTree
}