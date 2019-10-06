import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    contacts : []
  },
  mutations: {

    updateContacts: ( state, contacts ) => state.contacts = contacts
  },
  actions: {

    pushContact( context, contact ){

      const contacts = context.state.contacts;
      contact.timestamp = new Date().toLocaleTimeString();
      contacts.push( contact );
      context.commit( 'updateContacts', contacts );
    }
  },
  getters: {

    contacts : state => state.contacts
  }
})
