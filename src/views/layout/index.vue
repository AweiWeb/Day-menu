<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { tablist } from './tabList'
import router from '@/router'
const current = ref(3)
const toggleICon = (id: number, path: string) => {
  const Icon = document.querySelectorAll(
    '.spanAll'
  ) as NodeListOf<HTMLSpanElement>
  // 根据id来获取当前的点击的icon
  current.value = id
  // 拿到所有的span
  for (let i = 0; i < Icon.length; i++) {
    Icon[i].classList.remove('active')
  }
  Icon[id - 1].classList.add('active')
  router.push(path)
}
// dom挂载的时候进行默认主页选中高亮
onMounted(() => {
  const Icon = document.querySelectorAll(
    '.spanAll'
  ) as NodeListOf<HTMLSpanElement>
  Icon[current.value - 1].classList.add('active')
})
</script>
<template>
  <div class="layout layout-zhu">
    <!-- 这里就是中间内容部分部分 -->
    <router-view></router-view>
    <!-- 这里就是底部tab栏目 -->
    <div class="layout layout-tab">
      <div
        v-for="(item, index) in tablist"
        :key="item.id"
        class="taball"
        :class="`tab${index + 1}`"
        @click="toggleICon(item.id, item.route)">
        <span :class="`span${index + 1}`" class="spanAll">
          <img :src="item.icon" alt=""
        /></span>
      </div>
      <div
        class="kong"
        :style="{
          transform: 'translateX(' + (current - 1) * 20 + 'vw)'
        }"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  &-zhu {
    background-color: rgb(250, 250, 250);
  }

  &-tab {
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    background: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    height: 8vh;

    .tab1,
    .tab2,
    .tab3,
    .tab4,
    .tab5 {
      flex: 1;
      height: 100%;
      line-height: 8vh;
      text-align: center;
      font-size: 12px;
      color: #e3a942;
      transition: 0.5s;
      text-align: center;
      transition-delay: 0s;
      display: flex;
      align-items: center;
      justify-content: center;

      .span1,
      .span2,
      .span3,
      .span4,
      .span5 {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          position: absolute;
          z-index: 2;
        }
      }

      .active {
        position: absolute;
        width: 14vw;
        height: 80%;
        transition: 0.5s;
        transform: translateY(-27px) translateX(8px);
        background: rgb(255, 106, 0);
        border-radius: 50%;
        z-index: 2;
      }

      .active::before {
        position: absolute;
        content: '';
        top: 10px;
        left: 0;
        width: 14vw;
        height: 90%;
        border-radius: 50%;
        background: rgb(255, 106, 0);
        opacity: 1;
        transition: 0.5s;
        filter: blur(5px);
      }
    }
    .kong {
      position: absolute;
      bottom: 2.7vh;
      left: 1.5vw;
      width: 21vw;
      height: 10vh;
      border-radius: 50%;
      z-index: 1;
      transition: 0.2s;
      background: rgb(255, 255, 255);
    }
    .kong::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 19.8vw;
      width: 30px;
      height: 30px;
      box-shadow: -10px 12px #fff;
      border-radius: 50%;
    }
    .kong::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 0vw;
      width: 30px;
      height: 30px;
      box-shadow: 18px 20px #fff;
      border-radius: 50%;
    }
  }
}
</style>
