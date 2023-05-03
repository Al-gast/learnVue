<template>
  <div>
    <button @click="toTeams">Teams</button>
    <button @click="buttonChangesSaved">Save Change</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    buttonChangesSaved(){
      this.changesSaved = true
    },
    toTeams(){
      this.$router.push('/teams')
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('UsersList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouterLeave');
    console.log(to, from);

    if (this.changesSaved) {
      next();
    }else{
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes!');
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>