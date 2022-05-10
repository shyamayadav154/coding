

    class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}



var reverseList = function(head) {

    let prev = null;
    let current = head;
// let [prev, current] = [null, head]
    
    while(current) {
        // [current.next, prev, current] = [prev, current, current.next]
        temp = current.next
        current.next = prev;
        prev = current;
        current = temp
    }
   
    console.log(prev);
    return prev
};

let head = [1,2,3,4,5]

reverseList(head)