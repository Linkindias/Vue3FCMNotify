<template>
  <div class='temp'>
        <button type="button" class="btn btn-primary" @click="csrf()">test csrf</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

var csrf = () => {
const axiosInstance = axios.create({
   withCredentials: true
})

const cookieCsrt = {
    ".AspNetCore.Antiforgery.lp_WNYK-yN0" : "CfDJ8EVPinpj2HNIgayyvl-6EcTDfxxHpbpk1z9_LFeOXpEpz46B4PEPYW6SlRAakJ_kXOPH5Ma4SJLWu2wb3foTBQ1r_5PrikEoEpEZcY8hrYvL4eMtDbQpwAHjkydhlgytDsGQ346FgYtmNoN4jjbqZsUCfDJ8EVPinpj2HNIgayyvl-6EcTEX6vNudfHdgABQv9fLc0Wm0BCl5rvLuNdlAK8OBOnVtP1L6N43XoYx2LJ1WBivz-lg-apRoI0HZqlGx4_iPpqWxaAanE5dpiQyG3j3hIc-Qzg2YeD-KcFikkJK_wVd_Q"
}

axiosInstance.post("https://localhost:7105/api/post/getList", {},{
        headers: {
            "X-XSRF-TOKEN": "CfDJ8EVPinpj2HNIgayyvl-6EcStu8aP9s0kLyKBCeUFP3ZAo7Ti94Oxc4Ku9JeDNhe4X8-q26NffOBiPdfZmhjqcM-LLMjb98d__0Xx51HeCBDOcJXZRubN_AJ02xVBu17T7Hgj7bLPP8BjBUPedZwKJag",
            // 'Cookie': cookieCsrt,
        },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    };

</script>
<style scoped>
@media (min-width: 1024px) {
  .temp {
    display: flex;
    flex-direction: row; /* row | row-reverse | column | column-reverse */
    flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
    justify-content: center; /* flex-start | flex-end | center | space-between | space-around */
    align-items: center; /* flex-start | flex-end | center | baseline | stretch */
    align-content: center; /* flex-start | flex-end | center | space-between | space-around | stretch */
  }
}
</style>