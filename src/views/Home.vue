<template>
  <div class="home">
    <h1>Home</h1>
    <List newTaskParam="asdf"/>
    <hr>
    <AddNew v-on:send="newTask"/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';
import AddNew from '@/components/AddNew.vue';

export default {
  name: 'home',
  data(){
    return{
      newTaskParam: '',
    }
  },
  components: {
    List, AddNew,
  },
  methods:{
    newTask(e){
      this.newTaskParam = e;
    }
  }
};
</script>
