/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return undefined;
  }

  // /** pop(): return & remove last item. */ [5, 10]

  pop() {
    if (this.length === 0) throw new Error('Cannot remove from empty list');
    let current = this.head;
    if (current === this.head && current.next === null) {
      this.tail = null;
      this.head = null;
      this.length -= 1;
      return current.val;
    }

    while (current.next.next) {
      current = current.next;
    }

    let removed = current.next;
    this.tail = current;
    current.next = null;
    this.length -= 1;
    return removed.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw new Error('Cannot remove from empty list');
    let current = this.head;
    let val = current.val;
    if (current.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    this.head = current.next;
    this.length -= 1;
    if (this.length === 1) this.tail = current.next;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error('Index outside of list');
    let current = this.head;
    let count = 0;
    while (count < idx) {
      current = current.next;
      count += 1;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error('Index outside of list');
    let current = this.head;
    let count = 0;

    if (idx === 0) {

      this.head.val = val;
    }

    while (count < (idx - 1)) {
      current = current.next;
      count += 1;
    }

    current.next.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error('Index outside of list');
    let node = new Node(val);
    let current = this.head;
    let count = 0;

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;

    } else if (idx === 0) {
      node.next = this.head;
      this.head = node;
      this.length += 1;
    } else {

      while (count < (idx - 1)) {
        current = current.next;
        count += 1;
      }
      if (current.next) {
        node.next = current.next;
        current.next = node;
      } else {
        current.next = node;
        this.tail = node;
      }

      this.length += 1;

    }
    return undefined;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error('Index outside of list');
    let current = this.head;
    if (idx === 0 && this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return current.val;
    }
    let count = 0;
    while (count < (idx - 1)) {
      current = current.next;
      count += 1;
    }
    let val = current.next.val;
    current.next === current.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let current = this.head;
    while (current.next) {
      total += current.val;
      current = current.next;
    }
    total += current.val;
    return total / this.length;
  }
}

module.exports = LinkedList;
