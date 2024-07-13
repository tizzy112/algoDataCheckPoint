function insertionSort(array) {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        let current = array[i]; // store the current element value to be inserted

        // Find the position where current should be inserted
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        // Insert the current element in its correct position
        array[j + 1] = current;
    }

    return array;
}

insertionSort(array);
console.log("Sorted Array:", ourarray);
