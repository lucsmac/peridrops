import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MenuAnimation from './components/MenuAnimation.vue';
import HomeBtn from './components/HomeBtn.vue';

Vue.config.productionTip = false;
Vue.component('MenuAnimation', MenuAnimation);
Vue.component('HomeBtn', HomeBtn);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
