<script lang="ts" setup></script>
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
        <div class="food"><span>对应餐食</span></div>
        <div class="calendar"><span>我的日历</span></div>
      </div>
      <!-- 消息 -->
      <div class="message">
        <img src="../../assets/icon/message.png" alt="" />
      </div>
    </div>
    <div class="home-foodtitle">
      <span class="zh">早餐</span>
      <span class="el">breakfast</span>
    </div>
    <div class="home-select"></div>
  </div>
</template>
<style scoped lang="scss">
.home {
  height: 100vh;

  &-titlebox {
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .avatar {
      margin-top: 2vh;
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
      margin-top: 2vh;
      margin-right: 2vw;
      width: 60vw;
      height: 5vh;
      background-color: rgb(250, 250, 250);
      border-radius: 2.5vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .food {
        width: 30vw;
        height: 100%;
        border-radius: 2.5vh;
        background: rgb(28, 28, 28);
        color: rgb(255, 255, 255);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .calendar {
        width: 30vw;
        height: 100%;
        border-radius: 2.5vh;
        background: rgb(28, 28, 28);
        color: rgb(255, 255, 255);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .message {
      margin-top: 2vh;
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

  &-select {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80vw;
    height: 65vh;
    background-color: orange;
    border-radius: 2vh;

    img {
      width: 80vw;
      height: 65vh;
    }
  }

  &-foodtitle {
    position: absolute;
    top: 8%;
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
