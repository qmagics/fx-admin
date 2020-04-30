<template>
  <FxTable v-bind="tableOptions"></FxTable>
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
      tableOptions: {
        options: {
          api: "/api/UserComponent?optionType=list",
          toolbar: false,
          pagination: false,
          pageSize: 9999,
          resHandler(res) {
            return res.data.rows;
          }
        },

        columns: [
          {
            label: "NAME",
            prop: "name"
            // formatter: () => "AA"
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