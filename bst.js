    
   class  BinaryNode {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    
    // a node has data, left, and right pointers
    // left and right are intialized as null
    }
}
class BinaryTree {
    constructor(){
        this.root = null
        // when a new Tree is made, it has a root property
    }
    insert(data){
        const newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while(true) {
            if(data === current.data)return undefined
            if(data < current.data) {
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left

            } else {
                if(current.right === null) {
                    current.rigth = newNode
                    return this
                }
                current = current.left
            }
        }
        // add a new Node to the tree, with data as the Node's data
        // if the data is already in the tree, do not insert it
    }
    search(value){
        if(this.root === null) return false
        // if the node doesn't exist, return false
        let current = this.root
        let found = false
        // search the Tree for a node with the given value
        while (current && !found) {
            if(value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right  
            } else {
                found = true // if the node exists, return true
            }
        }
        if (!found) return undefined
        return current
        
        
        
    }
    size(node = this.root) {
        if (!node) {
            return 0
        }
        return 1 + this.size(node.left) + this.size(node.right)
        // calculate the number of nodes in the tree, starting from the given node
    }
    getMax(){
        if (!this.root) {
            return null
        }
        let currentNode = this.root
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.data
        // return the maximum value stored in the tree
    }
    height(node = this.root) {
        if (!node) {
            return -1
        }
        return 1 + Math.max(this.height(node.left), this.height(node.right))
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node
    }
    isBalanced(node = this.root) {
        if (!node) {
            return true
        }
        const leftHeight = this.height(node.left)
        const rightHeight = this.height(node.right)
        balance = Math.abs(leftHeight - rightHeight)
        return balance <= 1 && this.isBalanced(node.left) && this.isBalanced(node.rigth)
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}