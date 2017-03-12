/*eslint linebreak-style: ["error", "windows"]*/
'use strict';
function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
  this.push = function(data) {
    let newNode = new Node(this, data);
    const currentNode = this.last;
    newNode.prev = currentNode;
    if (this.length === 0) this.first = newNode;
    else currentNode.next = newNode;
    this.last = newNode;
    this.length = this.length + 1;
    return newNode;
  };
  this.pop = function() {
    if (this.length > 0) {
      const node = this.last;
      this.last = node.prev;
      if (node) {
        node.next = null;
        node.prev = null;
        node.list = null;
      }
      this.length =  this.length - 1;
      return node.data;
    }
  };
}

const list = new LinkedList();
list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third' });

console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());
