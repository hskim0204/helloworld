<template>
    <div>
        <br>
        <h1><p v-bind:align="myAlign">국회 도서관 도서 검색</p></h1><br>
        <p v-bind:align="myAlign" ><input v-model="srhInp" v-on:keyup.enter="goToResults" type="text" >
        &nbsp;<v-btn v-on:click="goToResults">검색</v-btn></p>                 
    </div>   
</template>
<script>
//router 정보 import
import router from '../assets/index'

export default {
    data: function() {
        return {
            srhInp: '',  
            myAlign: 'center',
            vList: false,
            vDtl: false
        }
    },
    
    methods: {
        goToResults: function() {            
            //console.log("srhInp :", this.srhInp.trim().length);
            /*if (this.srhInp.trim().length < 1) {
                return alert("검색어를 입력해주세요.")
            }*/
            router.push({
                name: 'resultList', // routes path name in index.js
                params: { srhs: this.srhInp } // resultList 에 넘길 파라미터. props 로 넘어감             
            }).catch(() => {})
        }
    }
}
</script>