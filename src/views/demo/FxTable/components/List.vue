<template>
  <FxTable v-bind="tableOptions" :query="query" @row-dblClick="onRowDblClick">
    <template #action>
      <el-button icon="el-icon-plus" @click="add">新增</el-button>
    </template>
  </FxTable>
</template>

<script>
import Vue from "vue";
import FxTable from "fx-table";
import "fx-table/lib/fx-table.min.css";
import "@/style/demo.scss";
import { mapState } from "vuex";
Vue.use(FxTable, {
  presetRowStates: {
    pending: false
  }
});

export default {
  methods: {
    add() {
      this.add1();
    },

    add1() {
      let modal = this.$modal(
        {
          component: () => import("./Form"),

          title: "新增用户1",

          data: {
            type: "add",
            vm: {},
            columns: this.tableOptions.columns,
            link: this.query.key
          },

          actions: {
            save(vm) {
              this.$message("保存成功!");
              console.log("save", vm);
              modal.close();
            },

            cancel(vm) {
              console.log(this);
              this.$alert("已取消");
              console.log("cancel", vm);
            }
          }
          // open: false

          // beforeClose(done, context) {
          //   if (context.vm.name || context.vm.age) {
          //     this.$confirm(
          //       "您填写的信息还未保存，关闭后信息将丢失，是否继续？"
          //     ).then(() => {
          //       done();
          //     });
          //   } else {
          //     done();
          //   }
          // }
        },
        this
      );
    },

    onRowDblClick(row) {
      this.toForm(row, "view");
    },

    toForm(row, type = "view") {
      this.$router.push({
        name: "FxTableForm",
        params: {
          row,
          type,
          columns: this.tableOptions.columns
        }
      });
    }
  },

  data() {
    return {
      visible: false,
      query: {
        key: ""
      },
      tableOptions: {
        options: {
          api: "/api/UserComponent?optionType=list"

          // aside: true
          // toolbar: false,
          // pagination: false,
          // pageSize: 9999,
          // resHandler(res) {
          //   return res.data.rows;
          // },

          // border:true,
          // outBorder:false,

          // asideTop:true,
          // asideTopProps:{
          //   showToggle:true
          // },
          // asideBottom:true,
        },

        columns: [
          {
            label: "NAME",
            prop: "name",
            formatter: val => `<strong>${val}<strong>`
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
          },
          {
            label: "操作",
            field: "id",
            width: 150,
            component: {
              props: ["row", "columns", "toForm"],
              render() {
                return (
                  <div>
                    <el-button
                      onClick={() => {
                        this.toForm(this.row, "view");
                      }}
                    >
                      查看
                    </el-button>
                    <el-button
                      onClick={() => {
                        this.toForm(this.row, "edit");
                      }}
                      icon="el-icon-edit"
                    ></el-button>
                  </div>
                );
              }
            },
            componentProps: {
              toForm: this.toForm
            }
          }
        ],

        data: []
      },
      vm: {}
    };
  },

  computed: {
    ...mapState({
      modal_list: state => state.modal.modal_list
    })
  }
};
</script>