<template>
    <div class="about">
        <button v-print="'#printMe'"> print</button>
        <button v-print="printObj"> print Obj</button>
    </div>
    <div id="printMe">
        <p>test print</p>
        <p>print print!</p>
    </div>
    <div id="printTest">
        <p>test print Obj</p>
        <p>print print!</p>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    
    var printObj = {
              id: "printTest",
              popTitle: 'good print',
              extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
              extraHead: '<meta http-equiv="Content-Language"content="zh-tw"/>',
              beforeOpenCallback (vue) {
                console.log('before Open')
              },
              openCallback (vue) {
                console.log('printing')
              },
              closeCallback (vue) {
                console.log('close print')
              }
            }
    </script>
<style>
@media (min-width: 1024px) {
    .about {
        display: flex;
        align-items: center;
    }
}
</style>