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
    background-color: #fdfdfd;
    border-top-left-radius: 6vw;
    border-top-right-radius: 6vw;
    div {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #e3a942;
    }
  }
}
</style>
