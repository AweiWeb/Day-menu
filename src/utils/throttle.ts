/*
 * 这里是一个节流函数的封装
 * 这个函数的last就是记录上次的时间
 * 由于是return一个函数 last一直在被引用
 * 所以last不会在每次触发函数时候被清零
 */

export function throttleFun(fun: Function, delay: number) {
  let timer = 0
  let last = 0
  return function () {
    const now = new Date() as any
    if (!last || now - last >= delay) {
      last = now
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fun()
        console.log(last)
      }, delay)
    }
  }
}
