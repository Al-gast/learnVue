import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMember from './components/teams/TeamMembers.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UserFooter from './pages/UserFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams'},
    {
      path: '/teams', 
      name:'teams',
      meta: {needsAuth: true}, 
      components: {
        default: TeamsList,
        footer: TeamsFooter
      }, 
      children:[
      {
        path: ':teamId', 
        name:'team-members', 
        component: TeamMember, 
        props: true},
    ]},
    {path: '/users', 
    components: {
      default: UsersList,
      footer: UserFooter
    }},
    {path: '/:notFound(.*)', redirect: '/teams'}
  ],
  linkActiveClass: 'active',
  scrollBehavior (_, _2, savedPosition) {
    if (savedPosition){
      return savedPosition
    }
    return {left: 0, top: 0}
  }
})

export default router;