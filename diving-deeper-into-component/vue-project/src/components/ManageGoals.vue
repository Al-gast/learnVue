<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" name="" value="">
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="errorValue">
        <h2>Input isvalid</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">OK</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
  import ErrorAlert from './ErrorAlert.vue'
  export default {
    components: {
      ErrorAlert
    },
    data() {
      return {
        errorValue: false,
      }
    },
    methods: {
      setGoal(){
        const enteredValue = this.$refs.goal.value;
        if (enteredValue === '') {
          this.errorValue = true
        }
      },
      confirmError(){
        this.errorValue = false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>