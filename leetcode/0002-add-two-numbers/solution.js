/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
        
        let totalSum=0;
        let carry=0;
        let x=0,y=0;
        let LinkedList=new ListNode(0);
        let head =LinkedList;
        while(l1 !==null || l2 !==null)
        {   x=(l1 !==null)? l1.val :0
            y=(l2 !==null)? l2.val :0
            totalSum=x+y+carry;
            carry=Math.floor(totalSum / 10);
            totalSum=totalSum % 10;
            LinkedList.next=new ListNode(totalSum);
            LinkedList=LinkedList.next;
            if(l1 !==null)l1=l1.next;
            if(l2 !==null)l2=l2.next;
        }if(carry>0){LinkedList.next=new ListNode(carry)};
        return head.next;
};
