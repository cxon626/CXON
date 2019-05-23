/**
 * 归并排序
 */

class BubbleSort {
  constructor(arr) {
    this.arr = arr
  }

  sort() {
    let { arr } = this
    let temp
    if (!arr || !arr.length)
      return
    for (let i = 0;i < arr.length;i++) {
      for (let j = arr.length - 1;j > i;j--) {
        if (arr[j] < arr[j - 1]) {
          temp = arr[j]
          arr[j] = arr[j - 1]
          arr[j - 1] = temp
        }
      }
    }
    console.log(arr)
  }
}

const test = new BubbleSort([32, 45, 21, 4, 432, 231, 89, 156, 123])
test.sort() // [4, 21, 32, 45, 89, 123, 156, 231, 432]
