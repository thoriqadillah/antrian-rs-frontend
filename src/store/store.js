import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            authenticated: false,
            user: null,
            antrianUser: null,
            terdaftar: false
        }
    }, 
    mutations: {
        setAuth: (state, auth) => state.authenticated = auth,
        setUser: (state, user) => state.user = user,
        setAntrian: (state, dataAntrian) => state.antrianUser = dataAntrian,
        setTerdaftar: (state, terdaftar) => state.terdaftar = terdaftar

    },
    actions: {
        authenticateUser: ({ commit }, auth) => commit('setAuth', auth), //sebuah function untuk commit suatu perubahan
        saveUser: ({ commit }, user) => commit('setUser', user),
        daftarAntrian: ({ commit }, dataAntrian) => commit('setAntrian', dataAntrian),
        setTerdaftar: ({ commit }, terdaftar) => commit('setTerdaftar', terdaftar)
    },
    modules: {

    }
})