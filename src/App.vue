<template>
  <div id="app">
    <router-view></router-view>

    <Modal />
  </div>
</template>

<script>
import Vue from "vue";
import Modal from "@/components/modal";
Vue.use(Modal);

export default {
  name: "App",

  components: { Modal },

  data() {
    return {};
  }
};
</script>