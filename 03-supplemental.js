// Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

let LinkedList = require('./01-linkedlist');

function createList() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertFirst('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena','Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');

    return SLL;
}

let SLL = createList();

// display: displays the linked list
SLL.print(); // Already implemented this to test previous exercises

// size: returns the size of the linked list
function size(list) {
    let curr = list.head;
    let count = 0;
    while (curr !== null) {
        count++;
        curr = curr.next;
    }
    return count;
}

console.log(size(SLL));

// isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty(list) {
    return (list.head === null);
}

console.log(isEmpty(new LinkedList));
console.log(isEmpty(SLL));

// findPrevious: finds the node before the item you are looking for
function findPrevious(list, item) {
    let curr = list.head;
    if (curr === null) return null;
    while(curr.next.value !== item) {
        curr = curr.next;
        if (curr.next === null) return null;
    }
    return curr;
}

console.log(findPrevious(SLL, 'Athena'));

// findLast: returns the last node in the linked list

function findLast(list) {
    let curr = list.head;
    if (curr === null) return null;
    while(curr.next !== null) {
        curr = curr.next;
    }
    return curr;
}

console.log(findLast(SLL));