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
    let carry = 0;
    let resLL = new ListNode();
    let resLLHead = resLL;
    let sumRes = 0;

    while (l1 && l2) {
        sumRes = l1.val + l2.val + carry;
        carry = Math.floor(sumRes / 10);
        sumRes = sumRes % 10;

        resLL.val = sumRes;

        l1 = l1.next;
        l2 = l2.next;

        if (l1 || l2 || carry > 0) {
            resLL.next = new ListNode();
            resLL = resLL.next;
        }
    }

    let tempLL = l1 || l2;

    while (tempLL) {
        sumRes = tempLL.val + carry;
        carry = Math.floor(sumRes / 10);
        sumRes = sumRes % 10;

        resLL.val = sumRes;
        tempLL = tempLL.next;

        if (tempLL || carry > 0) {
            resLL.next = new ListNode();
            resLL = resLL.next;
        }
    }

    if (carry > 0) {
        resLL.val = carry;
    }

    return resLLHead;
};
