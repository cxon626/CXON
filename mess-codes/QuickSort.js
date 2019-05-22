/**
 * 快速排序
 */

class QuickSort {
  constructor(arr) {
    this.arr = arr
  }

  sort() {
    let { arr } = this
    if (!arr || !arr.length)
      return
    this.quickSort(0, arr.length - 1)
    console.log(arr)
  }

  quickSort(left, right) {
    if (left > right)
      return
    let pivot = this.partition(left, right)
    this.quickSort(left, pivot - 1)
    this.quickSort(pivot + 1, right)
  }

  partition(left, right) {
    let { arr } = this
    let pivot = arr[left]
    while (left < right) {
      while (left < right && arr[right] >= pivot) {
        right--
      }
      if (left < right) {
        arr[left++] = arr[right]
      }
      while (left < right && arr[left] <= pivot) {
        left++
      }
      if (left < right) {
        arr[right--] = arr[left]
      }
    }
    arr[left] = pivot
    return left
  }
}

const test = new QuickSort([32, 45, 21, 4, 432, 231, 89, 156, 123])
test.sort() // [4, 21, 32, 45, 89, 123, 156, 231, 432]
