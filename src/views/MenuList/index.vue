<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
const route = useRoute()
onMounted(() => {
  console.log(route.params.id)
})
</script>
<template>
  <div>aaaa</div>
</template>
<style lang="less"></style>
