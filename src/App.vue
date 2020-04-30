<template>
  <el-container class="root-container">
    <!--<el-header height="40px">Demo</el-header>-->
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'" style="background:rgb(234, 239, 249);">
        <el-menu :default-active="$route.path" router :collapse="isCollapse" :mode="menuMode">
          <el-menu-item :index="r.path" v-for="r in routes" :key="r.path">
            <i :class="r.meta.icon"></i>
            <span slot="title">{{r.meta.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { routes } from "./router";
export default {
  data() {
    return {
      menuMode: "vertical",
      isCollapse: true,

      // menuMode: "horizontal",
      // isCollapse: false,

      routes: routes.filter(i => !i.redirect && i.meta.showInMenu !== false)
    };
  }
};
</script>

<style lang="scss">
.root-container,
.main-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.main-container {
  padding: 15px;
}

.el-main {
  position: relative;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
