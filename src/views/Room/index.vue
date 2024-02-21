<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { contacts } from './people'
import { onMounted } from 'vue'
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
onMounted(() => {
  // 这里需要根据本人信息获取本人的联系人信息
})
</script>
<template>
  <div class="room">
    <van-nav-bar
      title="联系人"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft" />
    <!--联系人信息 -->
    <div class="room-contactsbox">
      <div
        class="room-contacts"
        v-for="item in contacts"
        :key="item.id"
        @click="router.push({ path: '/room' + `/${item.id}` })">
        <!-- 联系人头像 -->
        <div class="contactsAvatar">
          <img src="../../assets/awei.jpg" alt="" />
        </div>
        <!-- 联系人的消息显示 -->
        <div class="contactsMessage">
          <span class="name">阿伟</span>
          <span class="message">aaaaaaaaaa</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.room {
  background: rgb(255, 255, 255);

  &-contactsbox {
    margin-top: 5vh;
  }

  &-contacts {
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1vh;
    padding-left: 0vh;

    .contactsAvatar {
      width: 16vw;
      height: 7vh;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .contactsMessage {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .name {
      }

      .message {
      }
    }
  }
}
</style>
