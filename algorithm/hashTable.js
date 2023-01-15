class RandomizedSet {
  constructor() {
    this.setArr = []
    this.setObj = {}
  }
  remove(ele) {
    if (this.setObj[ele] === undefined) {
      return false
    }
    const index = this.setObj[ele]
    this.setArr.splice(index, 1)
    delete this.setObj[ele]
  }
  insert(ele) {
    if (this.setObj[ele]) {
      return false
    }
    this.setArr.push(ele)
    this.setObj[ele] = this.setArr.length - 1
  }
  getRandom() {
    const index = Math.floor(Math.random() * this.setArr.length)
    return this.setArr[index]
  }
}

let obj = new RandomizedSet()
let param_1 = obj.insert(1)
let param_3 = obj.insert(2)
// console.log(obj.getRandom())
// console.log(obj.getRandom())
// console.log(obj.getRandom())
// console.log(obj.getRandom())
// console.log(obj.getRandom())
obj.remove(1)
console.log(obj.getRandom())
console.log(obj.getRandom())
console.log(obj.getRandom())
console.log(obj.getRandom())