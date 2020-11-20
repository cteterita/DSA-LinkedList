// 4. Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

const LinkedList = require("./01-linkedlist");

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// The algorithm appears to skip remove duplicate, adjacent list items
// Time complexity is O(n)


// 5. Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

function reverseList(list) {
    let curr = list.head;
    let prev = null;
    let next = null;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    list.head = prev;
    return list;
}

let list = new LinkedList;
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);
list.insertFirst(6);
list.insertFirst(7);
list.print();

reverseList(list).print()

// 6. Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

function findThirdLast(list) {
    let curr = list.head;
    if (curr === null || curr.next === null) return null;
    let second = null;
    let third = null;
    while (curr.next !== null) {
        third = second;
        second = curr;
        curr = curr.next;
    }
    return third;
}

console.log(findThirdLast(list));

// 7. Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

function findMiddle(list) {
    if (list.head === null) return null;
    let fast = list.head;
    let slow = list.head;
    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // If there are two middle values, this will return the second of them.
    return slow;
}

console.log(findMiddle(list));

// 8. Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.
let newList = new LinkedList;
newList.insertFirst(1);
newList.insertFirst(2);
newList.insertFirst(3);
newList.insertFirst(4);

function makeListCycle(newList) {
    let curr = list.head;
    while (curr !== null && curr.next !== null) {
        curr = curr.next;
    }
    curr.next = findThirdLast(list);
    return list;
}

function containsCycle(list)  {
    let pastItems = [];
    let curr = list.head;
    while (curr !== null && curr.next !== null) {
        if (pastItems.indexOf(curr.next) > -1) return true;
        pastItems.push(curr);
        curr = curr.next
    }
    return false;
}
console.log(containsCycle(list)); //should be false

let cycleList = makeListCycle(list);
console.log(containsCycle(cycleList)); //should be true

// 9. Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.

let list3 = new LinkedList;
list3.insertFirst(18);
list3.insertFirst(2);
list3.insertFirst(4);
list3.insertFirst(5);
list3.insertFirst(3);
list3.insertFirst(1);

function findMiddleFromNode(node) {
    if (node === null) return null;
    let fast = node;
    let slow = node;
    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // If there are two middle values, this will return the second of them.
    return slow;
}

function sortList(list) {
    list.head =  sort(list.head);
    return list;
}

function sort(node) {
    // Get the middle and split into halves
    let middle = findMiddleFromNode(node);
    if (middle === null || middle.next === null) return middle;
    let lastHalf = sort(middle.next);
    middle.next = null;
    let firstHalf = sort(node);
    return mergeList(firstHalf, lastHalf);
}

function mergeList(node1, node2) {
    // Will only merge 2 sorted lists
    // Find the head (first value)
    let list = new LinkedList;
    if (node1.value < node2.value) {
        list.head = node1;
        node1 = node1.next
    } else {
        list.head = node2;
        node2 = node2.next;
    }

    let curr = list.head;
    // While both lists have items, pick the smallest to come next
    while(node1 !== null && node2 !== null) {
        if(node1.value < node2.value) {
            curr.next = node1;
            node1 = node1.next;
        } else if(node1.value > node2.value) {
            curr.next = node2;
            node2 = node2.next;
        }
        curr = curr.next;
    }
    
    // Add remaining items from the other list
    if (node1 !== null) curr.next = node1;
    if (node2 !== null) curr.next = node2;
    return list.head;
}

sortList(list3).print();