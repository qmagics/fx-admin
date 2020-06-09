<template>
  <div class="demo has-header">
    <el-page-header @back="back" class="demo-header" content="表单"></el-page-header>
    <div class="demo-body">
      <Form style="width:600px;" :columns="columns" :vm="$route.params.row" :readonly="readonly" />
    </div>
  </div>
</template>

<script>
import Form from "./components/Form";

export default {
  data() {
    return {
      columns: [
        {
          label: "NAME",
          prop: "name"
        },
        {
          label: "CODE",
          prop: "code"
        },
        {
          label: "TYPE",
          prop: "type",
          component: () => import("@/components/cells/CellSelect"),
          componentProps: {
            selections: [
              { label: "表格", value: "table" },
              { label: "自定义", value: "custom" },
              { label: "组", value: "group" }
            ]
          }
          // component: {
          //   props: ["value", "model", "column"],
          //   render() {
          //     const { prop } = this.column;
          //     return (
          //       <div>
          //         <el-select v-model={this.model[prop]}>
          //           <el-option label="表格" value="table"></el-option>
          //           <el-option label="组" value="group"></el-option>
          //         </el-select>
          //       </div>
          //     );
          //   }
          // }
        },
        {
          label: "DESCRIPTION",
          prop: "description",
          component: {
            props: ["value", "row", "column"],
            render() {
              const { prop } = this.column;
              return (
                <div>
                  <el-input
                    type="textarea"
                    v-model={this.row[prop]}
                  ></el-input>
                </div>
              );
            }
          }
        }
      ]
    };
  },

  components: {
    Form
  },
  computed: {
    readonly() {
      return this.$route.params.type == "view";
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>