import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios)

export default new vuex.Store({
  state: {
    posts: [],
    data: null,
    cur: null
  },
  actions: {
    loadPosts({commit}) {
      axios
        .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(data => {
          let posts = data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    dataUpdate(state, value) {
      state.data = value
    },
    chooseCur(state, number) {
      state.cur = number
    }
  }
})
