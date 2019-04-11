<template>
  <div>
    <h1>Result</h1>

    <h2>{{this.$store.getters.change}}</h2>

    <router-link class="button-change" to="/">Back to main menu</router-link>
  </div>
</template>

<script>
  import Input from './Input.vue'

  export default {
    components: {
      appInput: Input
    },
      data () {
        return {
          msg: 'Change'
        }
      },
        name: "Change"
    }
</script>

<style scoped>

</style>
