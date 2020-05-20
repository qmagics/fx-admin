<template>
  <div class="form">
    <el-form :model="vm">
      <el-form-item :label="c.label" :prop="c.prop" v-for="c in columns" :key="c.prop">
        <el-input v-model="vm[c.prop]"></el-input>
      </el-form-item>

      <el-form-item style="text-align:right">
        <el-button type="default" @click="$emit('action1',vm)">Action1</el-button>
        <el-button type="primary" @click="$emit('action2',vm)">Action2</el-button>
        <!-- <el-button type="primary" @click="openModal">再打开一个Modal</el-button>
        <el-button type="primary" @click="submit">提交</el-button>-->
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
  },

  methods: {
    
  }
};
</script>

<style>
</style>