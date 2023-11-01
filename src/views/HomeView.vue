<template>
  <main>
    <TheWelcome />
  </main>{{ $t('edit') }}
  <button @click="conterStore.increment">+</button>
  <button @click="conterStore.decrease">-</button>
  {{ conterStore.count }} {{ conterStore.doubleCount }}

  <button @click="add()">+</button>
  <button @click="subtract()">-</button>
  {{ localCount }} {{ localDoubleCount }}
  
  <button @click="$i18n.locale = 'zh-TW'">tw</button>
  <button @click="$i18n.locale = 'en-US'">en</button>
</template>
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore} from '../stores/counter'
import {  onMounted, reactive, ref, watch ,computed } from 'vue'

const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

const conterStore = useCounterStore()

let localCount = ref(0)
const add = () => { 
  localCount.value++ 
}
const subtract = () => { 
  localCount.value-- 
}

watch(localCount, async (newQuestion, oldQuestion) => {
  if (newQuestion != undefined) {
  }
})

let localDoubleCount = ref(0)

</script>
<style scoped>
</style>

