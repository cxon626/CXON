/**
 * 实现一个链表
 */

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class NodeList {
  constructor(item) {
    this.head = new Node(item)
  }
}
