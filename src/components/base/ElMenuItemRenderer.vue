<template>
  <component :is="comp" :index="route.path" :key="route.path">
    <template slot="title">
      <i :class="route.meta.icon"></i>
      {{route.meta.title}}
    </template>
    <template v-if="comp==='el-submenu'">
      <ElMenuItemRenderer v-for="r in route.children" :route="r" :key="r.path" />
    </template>
  </component>
</template>

<script>
export default {
  name: "ElMenuItemRenderer",

  props: {
    route: {}
  },

  computed: {
    comp() {
      if (!this.route.children || !this.route.children.length) {
        return "el-menu-item";
      } else {
        return "el-submenu";
      }
    }
  }
};
</script>

<style>
</style>