import { ref } from 'vue'

export const tablist = ref([
  { id: 1, route: '/order', name: '订单' },
  { id: 2, route: '/recommend', name: '推荐' },
  { id: 3, route: '/home', name: '首页' },
  { id: 4, route: '/turntable', name: '转盘' }
])
