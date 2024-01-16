<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { tablist } from './tabList'
import router from '@/router'
const current = ref(3)
const toggle = (item: any, index: any) => {
  current.value = item.id
  const itemAll = document.querySelectorAll(
    '.taball'
  ) as NodeListOf<HTMLDivElement>
  for (let i = 0; i < itemAll.length; i++) {
    itemAll[i].style.borderTopLeftRadius = ''
    itemAll[i].style.borderTopRightRadius = ''
    // itemAll[i].style.transition = '0s'
  }
  const item1 = document.querySelector(`.tab${index + 2}`) as HTMLDivElement
  const item2 = document.querySelector(`.tab${index}`) as HTMLDivElement

  if (item1) {
    item1.style.borderTopLeftRadius = '5vw'
  }
  if (item2) {
    item2.style.borderTopRightRadius = '5vw'
  }
  router.push(item.route)
}
onMounted(() => {
  const item1 = document.querySelector(`.tab4`) as HTMLDivElement
  const item2 = document.querySelector(`.tab2`) as HTMLDivElement
  if (item1) {
    item1.style.borderTopLeftRadius = '5vw'
  }
  if (item2) {
    item2.style.borderTopRightRadius = '5vw'
  }
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
        @click="toggle(item, index)">
        {{ item.name }}
        <div
          class="kong"
          :style="{ left: `${index + 1} * 25vw` }"
          v-if="current === item.id"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  &-zhu {
    background-color: #e9e9e9;
  }

  &-tab {
    position: fixed;
    bottom: 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 8vh;
    transition: 0.5s;
    // background-color: #fdfdfd;
    .tab1,
    .tab2,
    .tab3,
    .tab4 {
      flex: 1;
      height: 100%;
      line-height: 8vh;
      text-align: center;
      font-size: 12px;
      color: #e3a942;
      transition: 0.5s;
      background-color: #fdfdfd;
      transition-delay: 0s;
    }

    .kong {
      transition: 0.5s;
      position: absolute;
      background-color: #e9e9e9;
      overflow: hidden;
      width: 25%;
      height: 100%;
      top: -2vh;
      border-bottom-left-radius: 5vw;
      border-bottom-right-radius: 5vw;
    }
  }
}
</style>
