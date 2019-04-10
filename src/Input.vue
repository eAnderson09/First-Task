<template>
  <div>

    <h1>{{ msg }}</h1>

    <input type="number" size="40" v-model="input">
    <h4>Money: {{ input }}</h4>

    <button @click="clear()">Clear</button>
    <router-link class="button-change" to="/currency" >Select currency</router-link>

  </div>
</template>

<script>
  import Currency from './Currency.vue'


  export default {
    components: {
      appCurrency: Currency
    },
    data () {
      return {
        msg: 'Insert the number',
        input: 0
      }
    },
    methods: {
      clear() {
        this.input = 0
      },
    },
    beforeDestroy() {
      this.$store.commit('dataUpdate', +this.input);
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
