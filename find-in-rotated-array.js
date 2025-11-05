export default function findInRotatedArray(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (numbers[mid] === target) {
            return mid;
        }

        if (numbers[start] <= numbers[mid]) {
            if (target >= numbers[start] && target < numbers[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        else {
            if (target > numbers[mid] && target <= numbers[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}
