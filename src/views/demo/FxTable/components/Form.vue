<template>
  <div class="form">
    <el-form :model="model" :disabled="readonly" label-width="120px">
      <el-form-item :label="c.label" :prop="c.prop" v-for="c in columns" :key="c.prop">
        <component
          v-if="c.component"
          :is="c.component"
          v-bind="c.componentProps"
          :row="model"
          :column="c"
          v-model="model[c.prop]"
          :readonly="readonly"
        ></component>
        <el-input v-else v-model="model[c.prop]"></el-input>
      </el-form-item>
    </el-form>
    <pre>{{filteredModel}}</pre>
  </div>
</template>

<script>
export default {
  props: {
    columns: {},
    vm: {},
    readonly: {}
  },
  data() {
    return {
      model: this.vm
    };
  },

  computed: {
    filteredModel() {
      let obj = {};

      for (const key in this.model) {
        if (this.columns.some(i => i.prop === key)) {
          obj[key] = this.model[key];
        }
      }

      return obj;
    }
  },

  methods: {},

  mounted() {
    console.log(this.columns);
  }
};
</script>

<style>
</style>