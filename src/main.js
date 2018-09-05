import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'

});


//Filters no longer need below bc registered it locally
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
});

//Custom directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
