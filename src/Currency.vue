<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <label><input v-model="chooseValue" type="radio" :value="{cur: post.sale, isSale: true}" name="button">{{post.ccy}} to {{post.base_ccy}}</label>
        <label><input v-model="chooseValue" type="radio" :value="{cur: post.buy, isSale: false}" name="button">{{post.base_ccy}} to {{post.ccy}}</label>
      </li>
    </ul>
    <h1>{{this.$store.state.data}}</h1>
    <router-link class="button-change" to="/change">Change</router-link>
    <router-link class="button-change" to="/">Back</router-link>
  </div>
</template>

<script>
  import Input from './Input.vue'
  import Change from './Change'
  import {mapState} from 'vuex'

  export default {
    components: {
      appInput: Input,
      appChange: Change
    },
    mounted() {
      this.$store.dispatch('loadPosts')
    },
    computed: {
      ...mapState([
        'posts'
      ])
    },
        name: "Currency",
      data() {
          return {
            chooseValue: {}
          }
      },
    beforeDestroy() {
      this.$store.commit('changeCurrencyInfo', this.chooseValue)
    }
    }
</script>

<style scoped>
  li {
    list-style-type: none;
  }

</style>
