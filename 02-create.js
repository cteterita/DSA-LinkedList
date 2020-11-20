// Write a function main. Within the function, using the linked list class above...


let LinkedList = require('./01-linkedlist');

function main() {
    // ...create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');

    // Add Tauhida to the list.
    SLL.insertFirst('Tauhida');

    // Remove Husker from the list.
    SLL.remove('Husker');

    // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
    // Add Athena before Boomer using your insertBefore() function.
    SLL.insertBefore('Athena','Boomer');

    // Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
    // Add Hotdog after Helo using the insertAfter() method.
    SLL.insertAfter('Hotdog', 'Helo');

    // Implement a function called insertAt() that inserts an item at a specific position in the linked list.
    // Using the insertAt() method insert Kat in the 3rd position of the list.
    SLL.insertAt('Kat', 3);

    // Remove Tauhida from the list.
    SLL.remove('Tauhida'); // Not a Cylon

    SLL.print();
}

main();