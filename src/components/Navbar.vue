<template>
  <div id="nav">
    <div class="navLogo">ToDo List in Vue.JS</div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<style lang="scss" scoped>
  .navLogo{
    float: left;
    font-size: 30px;
    margin-right: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 900;
    background: -webkit-linear-gradient(top, #000, #a0c); // We will need to generate gradient colors to complement the background.
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  #nav{
    border-bottom: 3px solid black;
  }
</style>
