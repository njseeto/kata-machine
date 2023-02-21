// Quicksort uses divide and conquer technique
// The algorithm picks a pivot element and rearranges the array
// Elements smaller than the pivot move to the left and elements greater move to the right
// The algorithm then recursively sorts the subarrays on the left and right of the pivot
// Here we our low and high will be inclusive
// Big O - best case O(n log n), worst case O(n^2)
// We require two functions, one for the pivot (partition) and one to sort (qs)


// the partition will return the pivot index
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let index = low - 1;

  // here we do a weak sort on the sub array, not including the pivot
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      index++;
      //  swap the items if they are less than the pivot
      const tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
    }
  }

  // we need to move the pivot where the pivot index is
  index++;
  arr[high] = arr[index];
  arr[index] = pivot;

  return index;
}

function qs(arr: number[], low: number, high: number): void {
  // define the base case, ie: when the low and high meet
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(arr, low, high);
  // repeat the quicksort on both sides of the pivot
  qs(arr, low, pivotIndex - 1);
  qs(arr, pivotIndex + 1, high);
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
