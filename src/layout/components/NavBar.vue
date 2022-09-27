<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="@/assets/common/logoone.png" alt="">
    </div>
    <div class="admin">
      <el-row>
        <el-col :span="6">
          <div class="img"><img src="@/assets/common/user.png" alt=""></div>
        </el-col>
        <el-col :span="10" class="welcome"><span>欢迎您, admin</span></el-col>
        <el-col :span="8" class="exit">
          <span>退出</span>
          <span class="el-icon-caret-bottom" />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-bar {
    width: 100%;
    height: 60px;
    background-color:#6b80de ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        img {
            width: 88px;
            height: 36px;
            margin: 6px 0 0 15px;
        }
    }
    .admin {
    width: 260px;
    height: 60px;
    line-height: 60px;
    margin-right: 40px;
    color: #fff;
    font-size: 16px;
    .img {
    height: 60px;
    display: flex;
    align-items: center;

    }
    .exit {
        text-align: center;
    }
    }
}
</style>

