<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
</script>
<template>
  <div class="roomHome">
    <van-nav-bar
      title="awei"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
  </div>
</template>
<style lang="scss"></style>
