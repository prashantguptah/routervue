
<script >
import { RouterLink } from 'vue-router';

export default{
    data(){
    return{
        person:[{id:1,name:'Engineer'},{id:2,name:'doctor'}]
    }
 }

}



</script>

<template>
  <h2>foo page</h2>
  <div v-for="item in person" :key="item.id">
  <RouterLink :to="`/foo/${item.id}`">
    <p>{{ item.id }} :: {{ item.name }} </p>
  </RouterLink>
</div>
   
   
  
</template>