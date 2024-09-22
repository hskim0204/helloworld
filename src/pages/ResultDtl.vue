<template>
  <div class="modal-wrap">
    <div class="modal-container">
      <h2 v-bind:align="dtlCenter">상세 도서정보</h2>

      <v-form>
        <v-container>
          <v-row> 부서명 </v-row>
          <v-row>
            {{ dname }}
          </v-row>
          <v-row> 부서위치 </v-row>
          <v-row>
            {{ loc }}
          </v-row>
        </v-container>
      </v-form>
      <div v-bind:align="dtlCenter" class="modal-btn">
        <button v-on:click="modalOpen">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../assets/index";

export default {
  data() {
    return {
      dname: "",
      loc: "",
      dtlCenter: "center",
      modalCheck: false,
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
    };
  },
  props: {
    dept: undefined,
  },
  created() {
    this.dname = this.dept.DNAME;
    this.loc = this.dept.LOC;
  },
  methods: {
    goBack: function () {
      router.go(-1);
    },
    modalOpen: function () {
      this.dname = "";
      this.loc = "";
      this.$emit("childClose");
    },
  },
};
</script>
