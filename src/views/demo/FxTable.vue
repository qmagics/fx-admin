<template>
  <div class="demo">
    <FxTable v-bind="tableOptions" :query="query">
      <template #aside>
        <div style="padding:10px;">
          <pre>{{modal_list}}</pre>
        </div>
      </template>

      <template #action>
        <el-button size="mini" icon="el-icon-plus" @click="add">新增</el-button>
      </template>
    </FxTable>

    <!-- <el-dialog title="新增组件" :visible.sync="dlgVisible" :close-on-click-modal="false">
      <el-form :model="vm" label-width="80px">
        <el-form-item label="NAME">
          <el-input v-model="vm.name"></el-input>
        </el-form-item>
      </el-form>

      <template slot="footer">
        <el-button @click="dlgVisible=false">取消</el-button>
        <el-button type="primary">确认</el-button>
      </template>
    </el-dialog>-->
  </div>
</template>

<script>
import FxTable from "fx-table";
import "fx-table/lib/fx-table.min.css";
// import Form from './Form';
import { mapState } from "vuex";

export default {
  components: {
    FxTable
  },

  methods: {
    add() {
      this.add1();
    },
    add1() {
      this.$modal(
        {
          component: () => import("./Form"),
          id: "AAA",

          title: "新增用户1",

          data: {
            type: "add",
            vm: {},
            columns: this.tableOptions.columns
          },

          actions: {
            action1: function(vm) {
              this.$alert("Action1操作成功!");
              console.log("action1", vm);
            },

            action2(vm) {
              this.$alert("Action2操作成功!");
              console.log("action2", vm);
            }
          },

          beforeClose(done, context) {
            if (context.vm.name || context.vm.age) {
              this.$confirm(
                "您填写的信息还未保存，关闭后信息将丢失，是否继续？"
              ).then(() => {
                done();
              });
            } else {
              done();
            }
          }
        },
        this
      );
    }
  },

  data() {
    return {
      query: {
        key: ""
      },
      tableOptions: {
        options: {
          api: "/api/UserComponent?optionType=list",

          aside: true
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
            label: "AGE",
            prop: "age"
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

<style>
.demo {
  height: 100%;
}
</style>