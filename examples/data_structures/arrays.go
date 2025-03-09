package main

import "fmt"

func arrayOperations() []int {
	// Initialize an array
	arr := []int{1, 2, 3, 4, 5}

	// Access element
	first := arr[0]
	fmt.Println("First element:", first)

	// Modify element
	arr[0] = 10

	// Add element to end
	arr = append(arr, 6)

	// Remove last element
	arr = arr[:len(arr)-1]

	return arr
}
