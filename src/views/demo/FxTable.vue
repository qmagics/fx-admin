<template>
  <div class="demo">
    <FxTable v-bind="tableOptions" :query="query">
      <template #aside>
        <div style="padding:10px;">DEMO</div>
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

export default {
  components: {
    FxTable
  },

  methods: {
    add() {
      this.$modal({
        component: () => import("./Form"),
        title: "新增用户",
        data: {
          type: "add",
          vm: {
            foo: "bar"
          },
          columns: this.tableOptions.columns
        }
      });
    }
  },

  data() {
    return {
      query: {
        key: ""
      },
      tableOptions: {
        options: {
          api: "/api/UserComponent?optionType=list"
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
      // dlgVisible: false,
      vm: {}
    };
  }
};
</script>

<style>
.demo {
  height: 100%;
}
</style>