<template>
  <div id="app">
    <router-view></router-view>
<!--    <h1 v-for="(item, index) in posts" :key="index">{{item.sale}}</h1>-->
  </div>
</template>

<script>
import Input from './Input.vue'
import Currency from './Currency.vue'
import Change from './Change'
import {mapState} from 'vuex'


export default {
  components: {
    appInput: Input,
    appCurrency: Currency,
    appChange: Change
  },
  name: 'app',
  data () {
    return {
      msg: 'Insert the number'
    }
  },
  mounted() {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  acceptInput() {

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
