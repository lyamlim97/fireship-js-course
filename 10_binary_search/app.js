const arr = ["a", "b", "c", "x", "y", "z"];

function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
}

console.log(search(arr, "b"));

function search2(arr, target, start = 0, end = arr.length - 1) {
    console.log(start, end);
    if (start > end) {
        console.log("Not Found");
        return -1;
    }
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        console.log(`${target} Found at index ${middle}`);
        return middle;
    }

    if (arr[middle] > target) {
        return search2(arr, target, start, middle - 1);
    }

    if (arr[middle] < target) {
        return search2(arr, target, middle + 1, end);
    }
}

console.log(search2(arr, "b"));
