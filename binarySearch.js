export default function binarySearch(sortedArray, item) {
    if (sortedArray.length < 0) {
        return null;
    }

    let low = 0;
    let high = (sortedArray.length - 1)

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        const guess = sortedArray[mid]
        if (item === guess) {
            return guess
        } else if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9))