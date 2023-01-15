// 给定两个数组，编写一个函数来计算它们的交集

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]

function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter(res => arr2.includes(res))
}

console.log(intersection([1,2,2,1], [2,2]))