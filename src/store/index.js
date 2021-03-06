import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	error: null
  },
  mutations: {
  	setError(state, error){
  		state.error = error
  	}
  },
  actions: {
  	setError(context, error){
  		context.commit('setError', error)
  	}
  },
})
