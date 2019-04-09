<template>
  <div id="app">
    <router-view></router-view>
    <router-link class="button-change" to="/">Input</router-link>
    <router-link class="button-change" to="/currency">Select currency</router-link>

  </div>
</template>

<script>
import Input from './Input.vue'
import Currency from './Currency.vue'


export default {
  components: {
    appInput: Input,
    appCurrency: Currency
  },
  name: 'app',
  data () {
    return {
      msg: 'Insert the number'
    }
  }
}
</script>

<style>

  .button-change {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    text-decoration: none;
    color: #000000;
    border: 2px solid #000000;
    padding: 2px 40px;
  }

</style>
