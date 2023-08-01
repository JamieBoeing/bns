const { BinaryNode, BinaryTree } =require('./bst')

class AVLTree extends BinaryTree{
    constructor(){
        super()
    }


    insert(data) {
        const newNode = new BinaryNode(data);
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


const avlTree = new AVLTree()

avlTree.insert(10)
avlTree.insert(20)
avlTree.insert(5)
avlTree.insert(17)
avlTree.insert(14)
avlTree.insert(38)
avlTree.insert(12)
avlTree.insert(3)
avlTree.insert(6)
avlTree.insert(34)

console.log('---Tree---')
console.log(JSON.stringify(avlTree.root, null, 2))
console.log('Root Node Height', avlTree.root.height)




module.exports = {
   
    AVLTree
}