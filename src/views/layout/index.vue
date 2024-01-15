<script lang="ts" setup>
import { tablist } from './tabList'
import router from '@/router'
</script>
<template>
  <div class="layout layout-zhu">
    <!-- 这里就是中间内容部分部分 -->
    <router-view></router-view>
    <!-- 这里就是底部tab栏目 -->
    <div class="layout layout-tab">
      <div
        v-for="item in tablist"
        :key="item.id"
        @click="router.push(item.route)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  &-tab {
    position: fixed;
    bottom: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    div {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
