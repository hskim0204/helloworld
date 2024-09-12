<template>
  <div>
    <br />
    <h1><p v-bind:align="myAlign">부서 검색</p></h1>
    <br />
    <p v-bind:align="myAlign">
      <input v-model="srhInp" v-on:keyup.enter="goToResults" type="text" />
      &nbsp;<v-btn v-on:click="goToResults" color="primary">검색</v-btn>
    </p>
  </div>
</template>
<script>
//router 정보 import
import router from "../assets/index";

export default {
  data: function () {
    return {
      srhInp: "",
      myAlign: "center",
      vList: false,
      vDtl: false,
    };
  },

  methods: {
    goToResults: function () {
      /*if (this.srhInp.trim().length < 1) {
                return alert("검색어를 입력해주세요.")
            }*/
      console.log("this.srhInp", this.srhInp);
      router
        .push({
          name: "resultList1", // routes path name in index.js
          params: {},
          state: { srhs: this.srhInp }, // 그 이외 데이터 전달은 state로 진행한다.
        })
        .catch(() => {});
    },
  },
};
</script>
