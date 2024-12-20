<template>
    <div id="app" style="width:1000">
        <div class="row ">
            <div class="col-sm">
                <bootstrap-table :columns="columns" :data="data" :options="options"></bootstrap-table>
                <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-sm">
                {{ state }}
            </div>
        </div> -->
    </div>
</template>
<script setup>
    import { apiGetName1 } from "../api/api.js";
    import axios from 'axios'
    import {  onMounted, reactive, ref, watch ,computed, toRefs } from 'vue'
    
    const columns = ref([
        {
          field: 'state',
          checkbox: true
        },
        {
          title: 'Item ID',
          field: 'id'
        },
        {
          field: 'name',
          title: 'Item Name'
        },
        {
          field: 'price',
          title: 'Item Price'
        },
        {
          field: 'action',
          title: 'Actions',
          align: 'center',
          formatter () {
            return '<a href="javascript:" class="like"><i class="fa fa-star"></i></a>'
          },
          events: {
            'click .like' (e, value, row) {
              alert(JSON.stringify(row))
            }
          }
        }
      ])
      const data = ref([
        {
          id: 0,
          name: 'Item 0',
          price: '$0'
        },
        {
          id: 1,
          name: 'Item 1',
          price: '$1'
        },
        {
          id: 2,
          name: 'Item 2',
          price: '$2'
        },
        {
          id: 3,
          name: 'Item 3',
          price: '$3'
        },
        {
          id: 4,
          name: 'Item 4',
          price: '$4'
        },
        {
          id: 5,
          name: 'Item 5',
          price: '$5'
        }
      ])
      const options = ref({
        search: true,
        showColumns: true
      })

    let state = ref('');
    const getInfos = () => apiGetName1();
    // await getInfos().then((res) => (state.value= res.data));
    
    // const test = async () => { 
    //     return await axios.get('https://localhost:7105/api/post/Test');
    // }


            
    onMounted (async() => {
        getInfos().then((data) => {
                state.value = data.data;
                console.log('1:' + state.value);
            })
            .catch((error) => {
                console.error(error);
            });
        // console.log(state);
        // test().then((data) => {
        //         state.value = data.data;
        //         console.log('1:' + state.value);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        });
</script>
<style>
@media (min-width: 1024px) {}
</style>