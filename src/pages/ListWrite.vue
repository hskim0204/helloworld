<template>
  <v-form>
    <v-container>
      <v-row> 부서명 </v-row>
      <v-row>
        <v-text-field
          :counter="50"
          label="부서명"
          name="title"
          required
          v-model="dName"
          maxlength="50"
        ></v-text-field>
      </v-row>
      <v-row> 부서위치 </v-row>
      <v-row>
        <v-textarea
          filled
          name="context"
          hint="부서 위치를 입력해주세요."
          v-model="loc"
          :counter="1000"
          maxlength="1000"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-btn block outlined color="blue" @click="writeClick"> 등록 </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "BoardWriter",

  created() {
    if (this.$route.params.deptNo) {
      this.dName = this.$route.params.dName;
      this.loc = this.$route.params.loc;
    }
  },
  methods: {
    writeClick() {
      if (this.$route.params.deptNo) {
        //this.$data.deptNo = this.$route.params.deptNo; 이것도 맞음
        this.$data["deptNo"] = this.$route.params.deptNo;
        axios
          .put("http://localhost:5043/depts", this.$data)
          .then((response) => {
            console.log(response);
            this.$router.push("/resultList1");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:5043/depts", this.$data)
          .then((response) => {
            console.log(response);
            this.$router.push("/resultList1");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  data() {
    return {
      dName: "",
      loc: "",
    };
  },
};
</script>
