<template>
  <div>

    <h1>{{ msg }}</h1>

    <input type="number" size="40" v-model="input">
    <h4>UAH: {{ input }}</h4>

    <button @click="clear()">Clear</button>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Insert the number',
        input: 0
      }
    },
    methods: {
      clear() {
        this.input = 0
      }

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
    font-size: 60px;

  }

</style>
