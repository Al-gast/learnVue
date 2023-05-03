import { createApp } from 'vue';
import router from './router'
import App from './App.vue';

router.beforeEach(function(to, from, next){
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next()
  }else{
    next();
  }
  // if (to.name === 'team-members'){
  //   next()
  // } else {
  //   next({name: 'team-members', params: {teamId: 't2'}})
  // }
})

router.afterEach(function(to, from){
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
})

const app = createApp(App)

app.use(router)

app.mount('#app');
