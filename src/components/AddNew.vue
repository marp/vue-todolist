<template>
  <div class="divAddNew">
    <input placeholder="ToDo Title" type="text" name="addNew" id="addNew" v-model="title" @input="handleInput">
    <button @click="send">Add</button>
  </div>
</template>

<script>
import EventBus from '../eventBus'

export default {
  name: 'AddNew',
  data(){
    return{
      title: '',
    }
  },
  methods:{
    handleInput(){
      // console.log(this.AddNewValue);
    },
    send() {
      const payload = {
        title: this.title,
        done: false
      }
      EventBus.$emit('DATA_PUBLISHED', payload);
      this.title = "";
    }
  },

}
</script>

<style lang="scss" scoped>
  .divAddNew{
    border: 3px double black;
  }
</style>
