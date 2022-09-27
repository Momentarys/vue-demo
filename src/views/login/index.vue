<template>
  <div class="login-container">
    <div class="login-form">
      <!-- logo头像框 -->
      <img src="@/assets/common/logo.png" alt="" class="login-logo">
      <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" auto-complete="on" label-position="left">
        <!-- 账户 -->
        <el-form-item prop="loginName">
          <span class="tbjbu el-icon-mobile-phone" />
          <el-input v-model="loginForm.loginName" placeholder="请输入账户" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <span class="tbjbu el-icon-lock" />
          <el-input ref="pwd" v-model="loginForm.password" :type="passwordType" placeholder="请输入密码" />
          <span @click="isShow">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye':'eye-open'" />
          </span>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <span class="tbjbu el-icon-user-solid" />
          <el-input v-model="loginForm.code" placeholder="请输入验证码" />
          <span class="span-img" @click="getValida">
            <img :src="imgData" alt="">
          </span>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-button :loading="loading" class="loginBth" @click="login">登录</el-button>
      </el-form>
    </div>

  </div>

</template>

<script>
import { getValidaAPI } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      // 密码显示与隐藏
      passwordType: 'password',
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      // 账户和密码 正则校验
      rules: {
        loginName: [
          { required: true, message: '请输入账户', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      loading: false,
      // 接收验证码接口图片
      imgData: ''
    }
  },
  created() {
    this.getValida()
  },
  methods: {
    // 点击密码显示与隐藏
    isShow() {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
      // 光标出现
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    },
    // 验证码
    async getValida() {
      this.loginForm.clientToken = Math.random()
      const res = await getValidaAPI(this.loginForm.clientToken)
      const url = window.URL.createObjectURL(res.data)
      // 将图片转换成img标签可以识别的url
      this.imgData = url
      // console.log(url)
    },
    // 登录
    async login() {
      try {
        // from 表达自带方法验证表单
        await this.$refs.loginForm.validate()
        this.loading = true
        // 防止异步传参方法
        await this.$store.dispatch('user/loginAction', this.loginForm)
        // 判断密码是否正确  正确就登陆 不正确就提示
        // 获取token  vuex中把data打他存入token中了
        if (this.$store.state.user.token.msg === '账户名或密码错误') {
          this.$message.error('账户名或密码错误')
          // 判断验证码正确就登陆
          if (this.$store.state.user.token.msg === '验证码错误') {
            this.$message.error('验证码错误')
          }
        } else {
          this.$router.push('/')
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }

}
// .loginName, this.loginForm.password, this.loginForm.code, this.loginForm.clientToken, this.loginForm.loginType

</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#9999b3;
$cursor: #999999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url('~@/assets/common/background.png') no-repeat 0 0 / cover; // 设置背景图片
  .el-form-item__content{
    background-color: #fff;
    border-radius: 5px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    // background-color: #fff;
    // border-radius: 5px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0rgba(30,111,72,.35);
    border-radius: 10px;
    .login-logo{
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    z-index: 999;
    }
    .tbjbu{
      margin-left: 10px;
    }
    // .dialog{
    //   color: #000;
    // }
    .span-img{
     position: absolute;
      top: 0;
      right: 0;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  // 登录
  .loginBth{
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }
}
</style>
