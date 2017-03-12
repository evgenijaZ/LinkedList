'use strict';

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}
