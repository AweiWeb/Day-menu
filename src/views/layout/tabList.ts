import { ref } from 'vue'
import home from '@/assets/icon/home.png'
import order from '@/assets/icon/order.png'
import recommend from '@/assets/icon/recommed.png'
import shoppingCart from '@/assets/icon/shoppingCart.png'
import turntable from '@/assets/icon/turntable.png'
export const tablist = ref([
  { id: 1, route: '/order', name: '订单', icon: order },
  { id: 2, route: '/turntable', name: '转盘', icon: turntable },
  { id: 3, route: '/home', name: '首页', icon: home },
  { id: 4, route: '/recommend', name: '推荐', icon: recommend },
  { id: 5, route: '/turntable', name: '转盘', icon: shoppingCart }
])
