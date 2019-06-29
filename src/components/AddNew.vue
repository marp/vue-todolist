<template>
  <div class="divAddNew">
    <input placeholder="ToDo Title" type="text" name="addNew" id="addNew" v-model="title" @input="handleInput">
    <button @click="send">Add</button>
  </div>
</template>

<script>
import EventBus from '../eventBus';

export default {
  name: 'AddNew',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    handleInput() {
      // console.log(this.AddNewValue);
    },
    send() {
      if (this.title !== '') {
        const payload = {
          id: Math.random().toString(36).substr(2, 9),
          title: this.title,
          done: false,
        };
        EventBus.$emit('DATA_PUBLISHED', payload);
        this.title = '';
      }
    },
  },

};
</script>

<style lang="scss" scoped>
  .divAddNew{
    // border: 3px double black;
    padding: 10px;
    justify-content: center;
    text-align: center;
  }
  button{
    background-color: darkslategrey;
    color: white;
    font-weight: 700;
    font-size: 20px;
    width: 100px;
    height: 50px;
    // padding: 10px;
    margin-left: 20px;
    border-radius: 30px;
    border: 4px solid black;
    cursor: pointer;
  }
  button:hover{
    border: 4px solid black;
    background-color: slategray;

  }
  input{
    height: 50px;
    font-size: 20px;
  }
</style>
