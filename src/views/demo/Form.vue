<template>
  <div class="form">
    <el-form :model="vm">
      <el-form-item :label="c.label" :prop="c.prop" v-for="c in columns" :key="c.prop">
        <el-input v-model="vm[c.prop]"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    vm: {},
    type: {},
    columns: {}
  },
  data() {
    return {
      model: this.vm
    };
  }
};
</script>

<style>
</style>