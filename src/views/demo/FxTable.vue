<template>
  <FxTable v-bind="tableOptions" :query="query">
    <template #aside>
      <div style="padding:10px;">DEMO</div>
    </template>
  </FxTable>
</template>

<script>
import FxTable from "fx-table";
import "fx-table/lib/fx-table.min.css";

export default {
  components: {
    FxTable
  },

  methods: {},

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
          }
        ],

        data: []
      }
    };
  }
};
</script>

<style>
</style>