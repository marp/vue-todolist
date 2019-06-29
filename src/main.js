import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  created () {
    document.title = "ToDo List";
  },
  router,
  render: h => h(App),
}).$mount('#app');
