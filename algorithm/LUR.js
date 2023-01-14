/*
LUR算法
缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，
  其核心思想是
    如果数据最近被访问过，那么将来被访问的几率也更高 
    优先淘汰最近没有被访问到的数据
    image: https://camo.githubusercontent.com/1c6efd9bd8b342270b7a7da2b0986576e323cf984763beb78f47f3cc6a40d993/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303430363230353234372e706e67
*/


class LRUCache {
  CacheArr = []
  CacheObj = {}
  constructor(max) {
    this.max = max
  }
  put(key, value) {
    const currentKeyInCacheArrIndex = this.CacheArr.indexOf(key)
    if (currentKeyInCacheArrIndex !== -1) {
      // 之前的key中存在
      CacheObj[key] = value
      // 刷新当前索引的位置
      const spliceEle = this.CacheArr.splice(currentKeyInCacheArrIndex, 1)[0]
      this.CacheArr.push(spliceEle)
    } else {
      if (this.max === this.CacheArr.length) {
        // 删除对头元素
        let removeEle = this.CacheArr.shift()
        delete this.CacheObj[removeEle]
      }
      this.CacheArr.push(key)
      this.CacheObj[key] = value
    }
  }
  get(key) {
    const currentKeyInCacheArrIndex = this.CacheArr.indexOf(key)
    const spliceEle = this.CacheArr.splice(currentKeyInCacheArrIndex, 1)[0]
    this.CacheArr.push(spliceEle)
    return this.CacheObj[key] || -1
  }
}

let cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4