<template>
  <el-dialog :title="title" :visible="visible" :before-close="beforeClose" @close="onClose">
    <component :is="component" v-bind="data"></component>
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      globalDialog: {
        title: "Global Dialog",
        visible: false
      }
    };
  },

  computed: {
    ...mapState({
      title: state => state.modal.title,
      visible: state => state.modal.visible,
      component: state => state.modal.component,
      data: state => state.modal.data,
    })
  },

  methods: {
    onClose() {
      this.$store.dispatch("modal/close");
      return false;
    },

    beforeClose(done) {
      done();
    }
  },

  created() {}
};
</script>

<style>
</style>