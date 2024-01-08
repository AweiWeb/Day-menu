<script lang="ts" setup></script>
<template>
  <div class="login">
    <div class="loginBox">
      <h1 class="title">每日菜单</h1>
      <input type="text" />
      <input type="text" />
      <button>登录</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/login.jpg');
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;

  .loginBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      color: #d1bbff;
    }

    input {
      margin-bottom: 1vh;
    }
  }
}
</style>
