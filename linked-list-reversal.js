export default function reverseLinkedList(head) {
    if (head === null || head.next === null) return head;
    let current = head;
    let next = current.next;
    let prev = null;

    while (next !== null) {
        current.next = prev;
        prev = current;
        current = next;
        next = current.next;
    }

    current.next = prev;

    return current;
}
