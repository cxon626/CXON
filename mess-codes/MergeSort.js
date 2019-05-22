/**
 * 归并排序
 */

class MergeSort {
  constructor(arr) {
    this.arr = arr
  }

  sort() {
    let { arr } = this
    if (!arr || !arr.length)
      return
    this.mergeSort(0, arr.length - 1)
    console.log(arr)
  }

  mergeSort(left, right) {
    if (left >= right)
      return
    let mid = parseInt((left + right) / 2)
    this.mergeSort(left, mid)
    this.mergeSort(mid + 1, right)
    this.merge(left, mid, right)
  }

  merge(left, mid, right) {
    let { arr } = this
    let temp = []
    let i = left
    let j = mid + 1
    let k = 0
    while (i <= mid && j <= right) {
      temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
    }
    while (i <= mid) {
      temp[k++] = arr[i++]
    }
    while (j <= right) {
      temp[k++] = arr[j++]
    }
    for (let n = 0;n < temp.length;n++) {
      arr[left + n] = temp[n]
    }
  }
}

const test = new MergeSort([32, 45, 21, 4, 432, 231, 89, 156, 123])
test.sort() // [4, 21, 32, 45, 89, 123, 156, 231, 432]
