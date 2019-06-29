<template>
  <div class="home">
    <h1>Home</h1>
    <List msg="Welcome to Your Vue.js App"/>
    <hr>
    <AddNew/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';
import AddNew from '@/components/AddNew.vue';

export default {
  name: 'home',
  components: {
    List, AddNew,
  },
};
</script>
