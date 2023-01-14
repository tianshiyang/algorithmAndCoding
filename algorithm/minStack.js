// 字节设计一个最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

class MinStack {
  constructor() {
    this.StackArr = []
  }
  push(x) {
    this.StackArr.push(x)
  }
  pop() {
    return this.StackArr.pop()
  }
  top() {
    return this.StackArr[this.StackArr.length - 1]
  }
  getMin() {
    return this.StackArr.map(res => res).sort((a, b) => a-b)[0]
  }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3); 
console.log(minStack.getMin())  // --> 返回 -3.
minStack.pop();
console.log(minStack.top())     // --> 返回 0.
console.log(minStack.getMin())   // --> 返回 -2.