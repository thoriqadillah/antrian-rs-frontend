import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            authenticated: false,
            user: null
        }
    }, 
    mutations: {
        setAuth: (state, auth) => state.authenticated = auth,
        setUser: (state, user) => state.user = user
    },
    actions: {
        authenticateUser: ({ commit }, auth) => commit('setAuth', auth), //sebuah function untuk commit suatu perubahan
        saveUser: ({ commit }, user) => commit('setUser', user)
    },
    modules: {

    }
})