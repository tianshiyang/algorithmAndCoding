/*
已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
*/

let arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9,
    [11, 12,
      [12, 13,
        [14]
      ]
    ]
  ],
  10]

let flatArr = arr.flat(4)

let respectArr = [...new Set(flatArr)]

let resultArr = respectArr.sort((start, end) => start - end)

// demo 自定义的flat函数
let result = []
const demoFlat = (arr) => {
  return arr.map(res => {
    if (Array.isArray(res)) {
      return demoFlat(res)
    }
    // console.log(res)
    result.push(res)
    return res
  })
}
demoFlat(arr)
console.log(result)