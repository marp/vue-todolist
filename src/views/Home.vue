<template>
  <div class="home">
    <h1>Home</h1>
    <p>Click on task to make it done or undone. Cross on right make removes task.</p>
    <List/>
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


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Mali:500,700&display=swap');

*{
    font-family: 'Mali', cursive;
}

</style>
