export default function smallestInRotatedArray(numbers) {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let leftCheck = true;
        let rightCheck = true;

        if (mid - 1 >= 0) {
            leftCheck = numbers[mid] < numbers[mid - 1];
        }

        if (mid + 1 <= end) {
            rightCheck = numbers[mid] < numbers[mid + 1];
        }

        if (leftCheck && rightCheck) {
            return numbers[mid];
        }

        if (leftCheck && rightCheck) {
            return numbers[mid];
        }

        if (numbers[start] <= numbers[mid] && numbers[mid] >= numbers[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}
