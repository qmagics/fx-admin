<template>
  <el-container class="root-container">
    <el-header height="40px">{{$route.path}}</el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'" style="background:rgb(234, 239, 249);">
        <el-menu :default-active="$route.path" router :collapse="isCollapse" :mode="menuMode">
          <ElMenuItemRenderer v-for="r in MenuRoutes" :route="r" :key="r.path" />
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { MenuRoutes } from "../router";
import ElMenuItemRenderer from "@/components/base/ElMenuItemRenderer.vue";

export default {
  name: "Master",

  components: {
    ElMenuItemRenderer
  },

  data() {
    return {
      menuMode: "vertical",
      isCollapse: false,

      // menuMode: "horizontal",
      // isCollapse: false,

      MenuRoutes
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
</style>