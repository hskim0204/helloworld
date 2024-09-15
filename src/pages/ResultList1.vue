<template>
  <v-card title="검색결과내 검색" flat>
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table
      :headers="headers"
      :items="deptList"
      :items-per-page="5"
      :search="search"
    >
    </v-data-table>
  </v-card>
  <rDtl v-show="modalCheck" :items="items" @childClose="modalClose"></rDtl>
</template>
<script>
import rDtl from "./ResultDtl";
import api from "../assets/api";

var param = {};

export default {
  data: () => ({
    search: "",
    headers: [
      {
        title: "부서코드",
        align: "center",
        sortable: false,
        filterable: false,
        key: "DEPTNO",
        show: true,
      },
      { title: "부서명", key: "DNAME" },
      { title: "부서위치", key: "LOC" },
    ],
    deptList: [],
    items: [],
    modalCheck: false,
  }),
  components: {
    rDtl,
  },
  props: {
    srhs: {
      type: String,
      required: true,
      default: "",
    },
  },
  created() {
    console.log("parameter :" + history.state.srhs);
    this.CallThisApi();
  },
  methods: {
    async CallThisApi() {
      param.dName = history.state.srhs;
      try {
        this.deptList = await api.getNanetAPI(param);
        this.search = "";
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    },
    goDtl(rData) {
      this.items = rData;
      this.modalCheck = true;
    },
    modalClose() {
      this.modalCheck = false;
    },
  },
};
</script>
