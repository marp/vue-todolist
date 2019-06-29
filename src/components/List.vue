<template>
  <div class="divList">
    <h3>ToDo List ( {{tasks.length}} )</h3>
    <ul v-for="task in tasks" :key="task.id">
      <li v-bind:class="{doneClass: task.done}">
        <s @click="done(task)" v-if="task.done">{{task.title}}</s>
        <span @click="done(task)" v-else>{{task.title}}</span>

        <button @click="remove(task)" class="x custom_padding">X</button>
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
    remove(task){
      function    arrayRemove(arr, value) {
          return arr.filter(function(ele){
              return ele != value;
          });
        }
      arrayRemove(this.tasks, task);
      this.tasks.splice(task, 1);
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
  border: 3px solid black;
  padding: 10px;
  background-color: lightgoldenrodyellow;
}

li{
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  color: black;
  cursor: pointer;
}

li:hover{
  text-decoration: underline;
  color:darkred;
}

.doneClass{
  color: green;
  font-weight: 500;
}

 .x {
    backface-visibility: hidden;
  position: relative;
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: #e52;
  border-radius: 100px;
  border: 0px solid #444;
  border-width: 0px 0px 0px 0px;
  padding: 0px 5px 0px 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  font-style: normal
  }
  .x > div {
    color: #999;
  font-size: 10px;
  font-weight: initial;
  font-style: normal;
  text-align: center;
  margin: 0px 0px 0px 0px
  }
  .x > i {
    color: #fff;
  font-size: 1em;
  border-radius: 0px;
  border: 0px solid transparent;
  border-width: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  position: static
  }
  .x > .ld {
    font-size: initial
  }
  .custom_padding{
    margin-left: 10px;
  }
</style>
