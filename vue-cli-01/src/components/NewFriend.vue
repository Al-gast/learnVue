<template>
  <div>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="enteredName" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel" name="phone" id="phone" v-model="enteredPhone" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" v-model="enteredEmail" />
      </div>
      <button>Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
