/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let tempNode = this.first;
			this.first = newNode;
			this.first.next = tempNode;
		}
		this.size++;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (!this.size) throw new Error('Empty Array');

		const nodeToRemove = this.first;

		if (this.size == this.last) {
			this.first = null;
			this.last = this.first;
		} else {
			this.first = this.first.next;
		}
		this.size--;

		return nodeToRemove.val;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this.size ? this.first.val : null;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return !this.size ? true : false;
	}
}

module.exports = Stack;
