<template>
  <div>
    <br />
    <h2><p v-bind:align="myCenter">검색 결과</p></h2>
    <table>
      <thead>
        <tr>
          <th v-bind:align="myCenter">지역코드</th>
          <th v-bind:align="myCenter">지역명</th>
          <th v-bind:align="myCenter">요일코드</th>
          <th v-bind:align="myCenter">요일명</th>
          <th v-bind:align="myCenter">관리자구분코드</th>
          <th v-bind:align="myCenter">관리자코드명</th>
          <th v-bind:align="myCenter">관리자번호</th>
          <th v-bind:align="myCenter">기본일자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in this.api_list" :key="i">
          <td>
            {{ item.areaCode }}
          </td>
          <td>
            {{ item.areaNm }}
          </td>
          <td>
            {{ item.daywkDivCd }}
          </td>
          <td>
            {{ item.daywkDivNm }}
          </td>
          <td>
            {{ item.touDivCd }}
          </td>
          <td>
            {{ item.touDivNm }}
          </td>
          <td>
            {{ item.touNum }}
          </td>
          <td>
            {{ item.baseYmd }}
          </td>
        </tr>
      </tbody>
    </table>
    <template> </template>
    <p v-bind:align="myCenter">
      <a class="underline" v-on:click="goNext(-1)"><b>이전</b></a>
      &nbsp;&nbsp;
      <a class="underline" v-on:click="goMain"><b>Main</b></a>
      &nbsp;&nbsp;
      <a class="underline" v-on:click="goNext(1)"><b>다음</b></a>
    </p>
    <rDtl v-show="modalCheck" :items="items" @childClose="modalClose"></rDtl>
    <br />
  </div>
</template>
<script>
import router from "../assets/index";
import rDtl from "./ResultDtl";
import api from "../assets/api";

var param = {
  search: "",
  pageno: "",
  displaylines: "",
};

export default {
  data: () => ({
    myCenter: "center",
    api_list: [],
    myVisible: false,
    items: [],
    modalCheck: false,
    pageNo: 1,
    displayNum: 10,
  }),
  components: {
    rDtl,
  },
  props: {
    srhsTest: {
      type: String,
      required: true,
      default: "",
    },
  },
  created() {
    this.CallThisApi();
  },
  methods: {
    async CallThisApi() {
      param.search = "자료명," + this.srhsTest;
      param.pageno = this.pageNo;
      param.displaylines = this.displayNum;
      try {
        this.api_list = await api.getNanetAPI(param);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    },
    goDtl(rData) {
      this.items = rData;
      this.modalCheck = true;
    },
    goMain: function () {
      router
        .push({
          name: "searchMain",
        })
        .catch(() => {});
    },
    goNext(no) {
      if (no == -1) {
        if (this.pageNo < 2) {
          alert("첫번째 페이지입니다.");
        } else {
          this.pageNo -= 1;
          this.CallThisApi();
        }
      } else {
        this.pageNo += 1;
        this.CallThisApi();
      }
    },
    modalClose() {
      this.modalCheck = false;
    },
  },
};
</script>
