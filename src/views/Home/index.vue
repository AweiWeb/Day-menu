<script lang="ts" setup>
import { ref } from 'vue'
import { throttleFun } from '@/utils/throttle'
import { DayMenuTitle, type title } from './title'
import { onMounted } from 'vue'
import router from '@/router'

const currentSelect = ref(false)
const currentTitle = ref<title>()
// 这里需要进行一个监听dom滚动的函数，监听餐食的图片然后动画的切换title对应的文字
const breakfastDom = ref<HTMLImageElement>()
const lunchDom = ref<HTMLImageElement>()
const dinnerDom = ref<HTMLImageElement>()
const toggleFood = throttleFun(() => {
  // 这里由于是监听dom的滚动，所以做了一个节流
  if (-200 < breakfastDom.value?.getBoundingClientRect().left) {
    console.log(breakfastDom.value?.getBoundingClientRect().left)
    currentTitle.value = DayMenuTitle.value[0]
  } else if (-320 < lunchDom.value?.getBoundingClientRect().left) {
    currentTitle.value = DayMenuTitle.value[1]
    console.log(currentTitle.value)
  } else if (dinnerDom.value?.getBoundingClientRect().left > -160) {
    currentTitle.value = DayMenuTitle.value[2]
    console.log(1111, currentTitle.value)
  } else {
    console.log()
  }
}, 1000)

const loadList = (food: number) => {
  // 1早餐 2午餐 3晚餐
  router.push({ path: '/menu' + `/${food}` })
}
onMounted(() => {
  // 这里后期根据登录时间来判断切换title和卡片，先默认早餐
  currentTitle.value = DayMenuTitle.value[0]
})
</script>
<template>
  <!-- 测试大量数据页面滚动效果 -->
  <div class="home home-box">
    <div class="home-titlebox">
      <!-- 头像 -->
      <div class="avatar">
        <img src="../../assets/awei.jpg" alt="" />
      </div>
      <!-- 顶部切换日历 -->
      <div class="title">
        <div
          class="food"
          :class="!currentSelect ? 'active' : 'food'"
          @click="currentSelect = false">
          <span>对应餐食</span>
        </div>
        <div
          class="calendar"
          :class="currentSelect ? 'active' : 'food'"
          @click="currentSelect = true">
          <span>我的日历</span>
        </div>
      </div>
      <!-- 消息 -->
      <div class="message" @click="router.push('/room')">
        <img src="../../assets/icon/message.png" alt="" />
      </div>
    </div>
    <div class="home-foodtitle">
      <span class="zh">{{ currentTitle?.title }}</span>
      <span class="el">{{ currentTitle?.Etitle }}</span>
    </div>
    <div class="home-select" @scroll="toggleFood">
      <img
        src="../../assets/home/breakfast.jpeg"
        alt=""
        ref="breakfastDom"
        @click="loadList(1)" />
      <img
        src="../../assets/home/lunch.jpeg"
        alt=""
        ref="lunchDom"
        @click="loadList(2)" />
      <img
        src="../../assets/home/dinner.jpeg"
        alt=""
        ref="dinnerDom"
        @click="loadList(3)" />
    </div>
    <!-- 弹窗 -->
  </div>
</template>
<style scoped lang="scss">
.home {
  height: 100vh;

  &-titlebox {
    position: fixed;
    top: 1vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .avatar {
      width: 5vh;
      height: 5vh;
      // background-color: red;
      margin-right: 5vw;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .title {
      margin-right: 2vw;
      width: 62vw;
      height: 5.5vh;
      background: rgb(255, 255, 255);
      border-radius: 2.5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;

      .food {
        width: 30vw;
        height: 100%;
        border-radius: 2.5vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
      }

      .calendar {
        width: 30vw;
        height: 100%;
        border-radius: 2.5vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
      }

      .active {
        transition: 0.2s;
        background: rgb(28, 28, 28);
        color: rgb(255, 255, 255);
      }
    }

    .message {
      width: 5vh;
      height: 5vh;
      // background-color: black;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  &-select {
    position: fixed;
    top: 23%;
    // left: 5%;
    // margin-top: 20vh;
    width: 100%;
    height: 60vh;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    // background-color: orange;
    border-radius: 2vh;

    img {
      width: 88vw;
      /* 调整图片宽度 */
      // height: 70vh;
      // object-fit: cover;
      /* 保持图片比例 */
      margin: 0 2.2vw;
      border-radius: 5vw;
      /* 两边漏出的部分 */
    }
  }

  &-foodtitle {
    position: absolute;
    top: 9%;
    left: 20%;
    width: 60vw;
    height: 10vh;
    background-image: url('../../assets/home/foodbackground.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .zh {
      font-size: 26px;
      font-weight: 600;
      color: rgb(250, 250, 250);
    }

    .el {
      font-size: 20px;
      color: rgb(250, 250, 250);
    }
  }
}
</style>
