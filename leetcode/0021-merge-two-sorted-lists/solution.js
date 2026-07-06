/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
      // create a listNode 
      let totalListNode = new ListNode(0) ;
      
      current = totalListNode ;

      while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1 ;
                list1 = list1.next ;
            } else {
                 current.next = list2 ;
                 list2 = list2.next ;
            }
            current = current.next ;
      }

      // If one of the lists runs out of elements, we directly link the remainder of the other list

      current.next = (list1 !== null) ? list1 : list2 ;

      return totalListNode.next ;
};
