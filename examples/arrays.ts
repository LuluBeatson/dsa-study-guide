function arrayOperations(): number[] {
    // Initialize an array
    const arr: number[] = [1, 2, 3, 4, 5];

    // Access element
    const first: number = arr[0];

    // Modify element
    arr[0] = 10;

    // Add element to end
    arr.push(6);

    // Remove last element
    arr.pop();

    return arr;
} 