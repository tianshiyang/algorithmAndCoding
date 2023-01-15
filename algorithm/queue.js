/*
demo1 
输入: "the sky is blue"
输出: "blue is sky the"
*/
let demo1 = "the sky is blue"
console.log(demo1.split(" ").reverse().join(" "))

/**
 * Demo2
  输入: "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
function lengthOfLongestSubstring(str) {
  let maxStrArr = []
  let currentStr = ""
  for (let i = 0; i < str.length -1; i ++) {
    if (!maxStrArr.includes(str[i])) {
      maxStrArr.push(str[i])
      currentStr = currentStr.length > maxStrArr.length ? currentStr : maxStrArr.join("")
    } else {
      const maxStrArrIndex = maxStrArr.indexOf(str[i])
      maxStrArr = maxStrArr.slice(maxStrArrIndex + 1)
      maxStrArr.push(str[i])
      currentStr = currentStr.length > maxStrArr.length ? currentStr : maxStrArr.join("")
    }
  }
  return currentStr
}

console.log(lengthOfLongestSubstring("pwwkew"))