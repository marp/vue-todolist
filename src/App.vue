<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
};
</script>


<style lang="scss">
  a{
    font-size: 22px;
    color: purple;
    text-decoration: none;
  }

  a:hover{
    text-decoration: underline;
    color: red;
  }


</style>
