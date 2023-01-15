// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意： 答案中不可以包含重复的三元组

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum(arr) {
  if (arr.length < 3) {
    return false
  }

  let result = []

  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 1; i ++) {

    if (i > arr.length -2) {
      return
    }

    if (arr[i] === arr[i - 1]) {
      // 过滤掉重复的项
      continue
    }
    let first = i + 1,
    second = arr.length - 1
    while (first < second) {
      if (arr[first] + arr[second] > arr[i] * -1) {
        second --
      } else if (arr[first] + arr[second] < arr[i] * -1) {
        first ++
      } else {
        result.push([arr[i], arr[first], arr[second]])
        second --
        first ++
      }
    }
  }

  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))