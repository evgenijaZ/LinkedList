'use strict';

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
  
  this.push = function(data) {
    const newNode = new Node(this, data);
    let currentNode = this.last;
    newNode.prev = currentNode;
    if (this.length === 0) this.first = newNode;
    else currentNode.next = newNode;
    this.last = newNode;
    this.length++;
    return newNode;
  };
  
  this.pop = function() {
  if (this.length > 0) {
    const node = this.last;
    this.last = node.prev;
    if (node){
    node.next = null;
    node.list = null;
    node.prev = null; }
    this.length--;
    return node.data;
  };
 
  
}

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}