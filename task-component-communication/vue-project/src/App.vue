<template>
  <div>
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @add-user="addContact"></user-data>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      user: {
        name: "Ata",
        age: "18",
      },
    };
  },
  methods: {
    addContact(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
