<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ count }}</h4>
  </div>
</template>
<script setup>
    import  { onMounted, reactive, ref, watch ,computed  } from 'vue'
    import axios from "axios";

    const test = () => {
      const announce = reactive({
        classId: 'Mike',
        sendType: 'Email',
        MsgBody: 'Test',
        EmailTitle: 'Title',
        EmailBody: 'Body',
        SendTeacher: 'Y',
        SendStudent: 'A',
        SendOperator: 'Y',
        operatorId: 'ccchiu',
        sends:[]
      });

      const announces = [];

        for (let i = 1; i <= 3; i++) {
            const announceObject = {
                MembNo: "1023100013",
                Mobile: "0901234567",
                Email: "ccchiu@sce.pccu.edu.tw"
            }
            announces.push(announceObject);
        };

        announce.sends = announces;
        console.log(announce);

        axios.post("https://localhost:7254/api/Course/AddAnnounceToCourse", announce)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
    const count = ref(0);

    onMounted(() => {
      test();
    })
    
</script>
<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
  }
}
</style>
