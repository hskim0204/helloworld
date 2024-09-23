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
      ><template v-slot:item="{ item }">
        <tr class="green-bg" @click="handleClick(item)">
          <td>{{ item.DEPTNO }}</td>
          <td>{{ item.DNAME }}</td>
          <td>{{ item.LOC }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
  <v-row>
    <v-btn outlined color="blue" @click="writeClick"> 작성 </v-btn>
  </v-row>
  <rDtl v-if="modalCheck" :dept="dept" @childClose="modalClose"></rDtl>
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
    dept: undefined,
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
      //this.dept = undefined;
      this.modalCheck = false;
    },
    handleClick(item) {
      console.log(item);
      this.dept = item;
      this.modalCheck = true;
    },
    writeClick() {
      console.log("???" + this.dept);
      if (!this.dept) {
        this.$router.push("/ListWrite");
      } else {
        this.$router.push({
          name: "listWrite",
          params: {
            deptNo: this.dept.DEPTNO,
            dName: this.dept.DNAME,
            loc: this.dept.LOC,
          },
        });
      }
    },
  },
};
</script>

<style lang="css">
.green-bg {
  display: table-row;
}

.green-bg:hover {
  background: green !important;
}
</style>
