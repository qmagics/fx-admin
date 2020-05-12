<template>
  <div class="LoginB">
    <div class="login-box" :class="{'is-logining':isLogining}">
      <div class="login-box__form">
        <div class="title">用户登录</div>
        <el-form class="form-items" ref="loginForm" :model="vm" :rules="rules">
          <el-form-item class="login-box__form--item" prop="Account">
            <el-input
              class="login-box__input"
              type="text"
              clearable
              v-model="vm.Account"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item class="login-box__form--item" prop="Password">
            <el-input
              class="login-box__input"
              type="password"
              show-password
              clearable
              v-model="vm.Password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item class="login-box__form--item" prop="Token">
            <el-input
              class="login-box__input"
              clearable
              type="text"
              v-model="vm.Token"
              placeholder="请输入验证码"
            />
          </el-form-item>
        </el-form>
        <div class="help">
          <span class="remember">记住密码</span>
          <span class="forget">忘记密码？</span>
        </div>
        <div class="submit">
          <button type="button" :disabled="isLogining" class="login-box__btn" @click="login">登录</button>
        </div>
      </div>
      <div class="login-box__tip1"></div>
      <div class="login-box__tip2"></div>
    </div>
  </div>
</template>

<script>
function getUrlParam(name) {
  if (name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  }
  let arr = window.location.search.replace(/\?/g, "").split("&"),
    obj = {};
  arr.forEach(item => {
    let _arr = item.split("=");
    obj[_arr[0]] = decodeURI(_arr[1]);
  });
  return obj;
}

export default {
  name: "LoginB",

  data() {
    const vm = {
      Account: "",
      Password: "",
      Token: ""
    };

    return {
      vm,

      toUrl: getUrlParam("toUrl"),

      isLogining: false,

      otherQuery: null,

      redirect: ""
    };
  },

  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },

  computed: {
    loginForm() {
      return this.$refs.loginForm;
    },
    rules() {
      return {
        Account: [{ required: true, message: "请输入账号", trigger: "change" }],
        Password: [
          { required: true, message: "请输入密码", trigger: "change" }
        ],
        Token: [{ required: true, message: "请输入验证码" }]
      };
    }
  },

  methods: {
    login() {
      this.loginForm.validate(valid => {
        if (valid) {
          this.isLogining = true;
          setTimeout(() => {
            this.showTip("success", "登录成功！");
            this.isLogining = false;
            this.$router.replace({
              path: this.redirect || "/",
              query: this.otherQuery
            });
          }, 2000);
        }
      });
    },

    showTip(type, msg) {
      this.$notify.closeAll();
      this.$notify[type]({
        title: "提醒",
        message: msg,
        position: "bottom-right"
      });
    },

    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    }
  }
};
</script>

<style src="./index.scss" lang="scss"></style>