import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    agent : {}
  },
  mutations: {

    saveAgent(){
      
    }
  },
  actions: {

    saveAgent( context, agent ){

      console.log( 'saving agent: ', agent );
      console.log( 'saving agent: ', agent );

    }
  },
  getters: {

  }
})
