<template>
  <div>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="enteredName" />
      </div>
      <div>
        <label for="name">Age</label>
        <input type="text" id="age" v-model="enteredAge" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>

<style lang="scss" scoped></style>
