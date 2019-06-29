<template>
  <div class="divList">
    <h3>ToDo List</h3>
    <ul v-for="task in tasks" :key="task.id">
      <li>
        {{task.title}}
        <button>Done</button>
        <button @click="remove(task.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    msg: String,
  },
  data(){
    return{
      tasks: [
        {
          id: 1,
          title: 'Make dinner'
        },
        {
          id: 2,
          title: 'Clean room'
        },
        {
          id: 3,
          title: 'Go to the gym'
        },
      ]
    }
  },
  methods: {
    add(){
      this.tasks.push(title);
    },
    remove(id){
      arrayRemove(this.tasks, id);
      this.tasks.splice(id, 1);
    },
    arrayRemove(arr, value) {
      return arr.filter(function(ele){
          return ele.id != value;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.divList{
  margin-left: auto;
  margin-right: auto;
  border: 3px double black;
}
</style>
