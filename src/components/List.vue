<template>
  <div class="divList">
    <h3>ToDo List</h3>
    <ul v-for="task in tasks" :key="task.id">
      <li>
        <s v-if="task.done">{{task.title}}</s>
        <span v-else>{{task.title}}</span>
        <button @click="done(task)">Done</button>
        <button @click="remove(task)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '../eventBus'

export default {
  name: 'List',
  props:{
    newTaskParam: {
      type: String,
      required: false,
      default: "xd",
    },
  },
  data(){
    return{
      tasks: [
        {
          id: 1,
          title: 'Make dinner',
          done: false,
        },
        {
          id: 2,
          title: 'Clean room',
          done: true
        },
        {
          id: 3,
          title: 'Go to the gym',
          done: false,
        },
      ]
    }
  },
  methods: {
    done(task){
      if(task.done !== true){
        task.done = true;
      }else{
        task.done = false;
      }
    },
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
    },
    updateData (payload) {
      this.tasks.push(payload);
    }
  },
    mounted () {
      EventBus.$on('DATA_PUBLISHED', (payload) => {
        this.updateData(payload)
      })
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
