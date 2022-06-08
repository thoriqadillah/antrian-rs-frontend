import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            authenticated: false
        }
    }, 
    mutations: {
        setAuth: (state, auth) => state.authenticated = auth
    },
    actions: {
        authenticateUser: ({ commit }, auth) => commit('setAuth', auth) //sebuah function untuk commit suatu perubahan
    },
    modules: {

    }
})