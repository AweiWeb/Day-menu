// eslint-disable-next-line no-undef
export default {
  plugins: {
    //   移动端适配插件
    'postcss-px-to-viewport': {
      // 设备宽度375计算vw的值
      // 具体参数网址 https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
      viewportWidth: 375
    }
  }
}
