/**
 * 选择排序
 * O(n^2)
 */

class SelectSort {
  constructor(arr) {
    this.arr = arr
  }

  sort() {
    let { arr } = this
    if (!arr || !arr.length)
      return
    this.selectSort()
    console.log(arr)
  }

  selectSort() {
    let { arr } = this
    let minIndex
    for (let i = 0;i < arr.length - 1;i++) {
      minIndex = i
      for (let j = i + 1;j < arr.length;j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (minIndex != i) {
        this.swap(i, minIndex)
      }
    }
  }

  swap(a, b) {
    let { arr } = this
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}

const test = new SelectSort([32, 45, 21, 4, 432, 231, 89, 156, 123])
test.sort() // [4, 21, 32, 45, 89, 123, 156, 231, 432]
