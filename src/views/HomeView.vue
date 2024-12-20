<template>
  <main>
    <TheWelcome />
  </main>
  <div>{{ $t('edit') }}
    <button @click="$i18n.locale = 'zh-TW'">tw</button>
    <button @click="$i18n.locale = 'en-US'">en</button>
  </div>
  <div>
    <button @click="conterStore.increment">+</button>
    <button @click="conterStore.reduce">-</button>
    {{ conterStore.count }} {{ conterStore.doubleCount }}
  </div>
  <div>
    <button @click="add()">+</button>
    <button @click="subtract()">-</button>
    {{ localCount }} {{ localDoubleCount }}
  </div>
  <div>
    <button @click="objtest()">ref</button>
  </div>
</template>
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore} from '../stores/counter'
import {  onMounted, reactive, ref, watch ,computed, toRefs } from 'vue'

// const props = defineProps({
//   foo: { type: String, required: true },
//   bar: Number
// })

const conterStore = useCounterStore()

let localCount = ref(0)
let localDoubleCount = ref(0)
const add = () => { 
  localCount.value++ 
  localDoubleCount.value +=2;
}
const subtract = () => { 
  localCount.value-- 
  localDoubleCount.value -=2;
}

watch(localCount, async (newQuestion, oldQuestion) => {
  if (newQuestion != undefined) {
  }
})

const state = reactive({
  name : 'Alice',
  age: 20
});

const refs = toRefs(state);
console.log(refs.name.value);
console.log(refs.age.value);

const objtest = () => {
  state.name = 'ddd';
  console.log('state:' + state.name);
  console.log('toref:' + refs.name.value);
}

onMounted (() => {})
</script>
<style scoped>
</style>

