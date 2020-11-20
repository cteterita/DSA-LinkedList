//Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        // Create a new node that points to the old head, and change this.head to point to the new Node
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let temp = this.head();
            while(temp.next !== null) {
                node = node.next;
            }
            temp.next = new _Node(item, null);
        }
    }
    remove(item) {
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = this.head;

        while((curr.value !== item)) {
            prev = curr;
            curr = curr.next;
        }
        if (curr === null) {
            throw 'item not found';
        }
        prev.next = curr.next;
    }
    find(item) {
        let curr = this.head;
        if(curr === null) return null;
        while (curr.value !== item) {
            if(curr.next === null) return null;
            curr = curr.next;
        }
        return curr;
    }
    insertBefore(newItem, oldItem) {
        let curr = this.head;
        let prev = this.head;

        while((curr.value !== oldItem)) {
            prev = curr;
            curr = curr.next;
        }
        if (curr === null) {
            throw 'item not found';
        }
        prev.next = new _Node(newItem, curr);
    }
    insertAfter(newItem, oldItem) {
        let curr = this.find(oldItem);
        curr.next = new _Node(newItem, curr.next);
    }
    insertAt(item, position) {
        if (position === 1) return insertFirst(item);
        let curr = this.head;
        for (let i = 2; i <= position; i++) {
            curr = curr.next;
        }
        curr.next = new _Node(item, curr.next);
    }
    print() {
        let str = '';
        let curr = this.head;
        while (curr !== null) {
            str += `${curr.value}, `
            curr = curr.next;
        }
        console.log(str);
    }
}

module.exports = LinkedList;