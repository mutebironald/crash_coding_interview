/**
*Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node.
EXAMPLE
lnput:the node c from the linked lista->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e- >f 
* 
*/

const SinglyLinkedList = require('../utils/singlyLinkedList');

//my implementation approach
//move the pointer until you reach the node to be deleted
//then move the pointer to point to the next node( the one after the "one being deleted")
// at the end of each iteration, the pointer is moved to the next node.

const deleteMidNode = (node, list) => {
    if(!node || !list) return;
    if(list.head.val === list.tail.val || node === list.head.val || node === list.tail.val) return list.print();

    let tip = list.head;
    while(tip){
        if(tip.next && tip.next.val && tip.next.val === node){
            let item = tip.next;
            tip.next = item.next;
        }
        tip = tip.next;
    }
    return list.print();
}

let list = new SinglyLinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  list.push(item);
}

// console.log(deleteMidNode(1, list));

//approach from ctci
let deleteMiddleNode = (node) => {
    if(node !== null && node.next !== null){
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
let r = new SinglyLinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  r.push(item);
}
console.log(r.head.next)
console.log(deleteMiddleNode(r.head.next))
console.log(r.print())
