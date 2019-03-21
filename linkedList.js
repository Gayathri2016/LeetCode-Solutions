/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 function Node(val) {
    this.val = val;
    this.next = null;
 }
 /**
  * Initialize your data structure here.
  */

 function MyLinkedList(){
   this._length = 0;
   this.head = null;
 }
 MyLinkedList.prototype.getNode = function(val)
 {
   var node = new Node(val);
   //if there is no head set node to head of the list
     if(!this.head){
      this.head = node;
      this._length +=1;
      return this;
    }
    node = this;
    return node;
 }
 /**
  * Append a node of value val to the last element of the linked list.
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtHead = function(val) {
  // if(val == null) return this;
   let curr = this.head;
   this.head = new Node(val);
   this.head.next = curr;
   this._length++;
   return this;
 };
 MyLinkedList.prototype.addToTail = function(val)
 {

   let current = this.head;
    while(current.next)
    {
      current = current.next;
    }
    current.next = new Node(val);
    this._length +=1;


 }

  /* Get the value of the index-th node in the linked list. If the index is invalid, return -1.
  * @param {number} index
  * @return {number}
  */
 MyLinkedList.prototype.get = function(index) {

   let current = this.getNode();
   if(index > this._length-1) return -1;
    for(let i=0;i<index;i++)
    {
      current = current.next;
    }
    return !current.val?current.head.val:current.val;
 };


 /**
  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
  * @param {number} index
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtIndex = function(index, val) {

  if(index>0 && index > this._length)
    return -1;
  let curr = this.getNode();
  let prev;

  if(index == 0)
  {
    this.addAtHead(val);
    return;
  }
  for(let i=0;i<index-1;i++)
  {
    curr = curr.next;
  }
  if(!curr)
    return;

  prev = curr.next;
  curr.next = new Node(val);

  curr.next.next = prev;

  curr._length++;


 };

 /**
  * Delete the index-th node in the linked list, if the index is valid.
  * @param {number} index
  * @return {void}
  */
 MyLinkedList.prototype.deleteAtIndex = function(index) {

  let curr = this.head;

  this._length--;
  if(index>0 && index > this.length)
    return -1;
  if(index ==0 )
  {
    this.head = curr.next;
  }
  for(let i=0;i<index-1;i++)
  {
    curr = curr.next;
  }
  curr.next = curr.next.next;




 };

 /**
  * Your MyLinkedList object will be instantiated and called as such:
  * var obj = Object.create(MyLinkedList).createNew()
  * var param_1 = obj.get(index)
  * obj.addAtHead(val)
  * obj.addAtTail(val)
  * obj.addAtIndex(index,val)
  * obj.deleteAtIndex(index)
  */


 var reverseLinkedList = function(val)
 {
   if(!val.head || !val.head.next) return val;
  let node = val.head;
  let temp ;
  let prev;
  var list = new MyLinkedList();

   while(node)
   {
     temp = node.next;
     node.next= prev;
     prev = node;
     node = temp;
     list.add(prev) ;
   }

   return list;
 }
 var l1 = new MyLinkedList();
 var l2 = new MyLinkedList();
 console.log("Add to head:" + l1.addAtHead(1));
 //console.log("Add to head:" + l1.addAtHead(2))
//  console.log("delete to index:" +l1.deleteAtIndex(1));
 //console.log("Add to tail:" +l1.addToTail(3));
 console.log("Add to index:" +l1.addAtIndex(1, 2));  // linked list becomes 1->2->3
 //console.log("Add to index:" +l1.addAtIndex(1, 5));
 //console.log("Add to tail:" +l1.addToTail(7));
 /*console.log("Add to head:" + l1.addAtHead(1));
 console.log("Add to index:" +l1.addAtIndex(5, 8));
 console.log("Add to index:" +l1.addAtIndex(5, 2));
 console.log("Add to index:" +l1.addAtIndex(3, 0));
 console.log("Add to tail:" +l1.addToTail(1));
 console.log("Add to tail:" +l1.addToTail(0));*/
 console.log("get:" +l1.get(1));
// console.log("delete to index:" +l1.deleteAtIndex(6));
 //console.log("get:" + l1.get(1));
// console.log("Add to index:" +l1.addAtIndex(0, 1));        // returns 2
 console.log("get:" +l1.get(0));
 console.log("get:" + l1.get(2));
 //console.log("delete to index:" +l1.deleteAtIndex(1));  // now the linked list is 1->3
         // returns 3


 /*l1.addToTail(4);
 l1.addToTail(1);
 l1.addToTail(8);
 l1.addToTail(4);
 l1.addToTail(5);
 l1.addAtHead(3);

 l2.addToTail(5);
 l2.addToTail(0);
 l2.addToTail(1);
 l2.addToTail(8);
 l2.addToTail(4);
 l2.addToTail(5);
 //console.log(reverseLinkedList(l1));
 //console.log(l1.getNode());
 //console.log(l1.get(1));
  //console.log(l1.addAtIndex(2, 2));
  console.log(l1.deleteAtIndex(2));*/

var getIntersectionNode = function(l1, l2) {
  let headA = l1.head;
  let headB = l2.head;

  if(headA === null || headB === null)return null;
  let p1 = headA
  let p2 = headB
    while(p1.val != p2.val){
      p1 = (p1?p1.next:headB);
      p2 = (p2 ? p2.next:headA);

    }
console.log(p1);
return p1;

};
