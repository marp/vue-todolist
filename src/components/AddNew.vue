<template>
  <div class="divAddNew">
    <input placeholder="ToDo Title" type="text" name="addNew" id="addNew" v-model="AddNewValue" @input="handleInput">
    <button @click="send">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddNew',
  props:{
    AddNewValue: {
      type: String,
      required: true
    },
  },
  data(){
    return{
      AddNewValue: '',
    }
  },
  methods:{
    handleInput(){
      console.log(this.AddNewValue);
    },
    send(event){
      this.$emit('send', AddNewValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .divAddNew{
    border: 3px double black;
  }
</style>
