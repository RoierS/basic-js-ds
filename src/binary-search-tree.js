const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
   return this.rootNode
  }

  add(data) {
    const newNode = new Node(data);
    if(this.rootNode === null) {
      this.rootNode = newNode;
      return;
    } 

    let currNode = this.rootNode;
    while (currNode) {
      if (data < currNode.data) {
        if (currNode.left === null) {
          currNode.left = newNode;
          break;
        }
        currNode = currNode.left;
      } else {
        if (currNode.right === null) {
          currNode.right = newNode;
          break;
        }
        currNode = currNode.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currNode = this.rootNode;
    while (currNode !== null) {
      if(data === currNode.data){
        return currNode;
      } else if (data < currNode.data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        if(!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          return node.left;
        }
        let tempNode = node.right;
  
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;

      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);  
  }

  min() {
    let currNode = this.rootNode;
    while (currNode && currNode.left) {
      currNode = currNode.left;
    }
    if (currNode) {
      return currNode.data;
    } else return null;
  }

  max() {
    let currNode = this.rootNode;
    while (currNode && currNode.right) {
      currNode = currNode.right;
    }
    if (currNode) {
      return currNode.data;
    } else return null;
  }
}

module.exports = {
  BinarySearchTree
};