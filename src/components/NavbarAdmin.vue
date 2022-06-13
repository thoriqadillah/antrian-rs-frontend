<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <span><a href="#" class="navbar-brand primary">VUE</a></span>
    <div id="navLinks">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="link in navLinks" :key="link">
            <span>
              <router-link :to="{ name: link.path }" class="nav-link">{{ link.name }}</router-link>
            </span>
          </li>

          <li class="nav-item" v-for="auth, index in authLinks" :key="auth">
            <span v-if="authenticated ">
              <router-link to="/logout" @click="logout" class="nav-link" v-if="index < 1">Logout</router-link>
            </span>
            <span v-else>
              <router-link :to="{ name: auth.path }" class="nav-link">{{ auth.name }}</router-link>
            </span>
          </li>
        </ul>
      </div>  
    </div>    
  </nav>  
</div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import authService from '../services/auth.service'
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const store = useStore()
    const router = useRouter()
    const authenticated = computed(() => store.state.authenticated)

    const logout = async () => {
      const loggeedOut = await authService.logout()
      if (loggeedOut) {
        store.dispatch('authenticateUser', false)
        router.push('/login')
      }
    }

    return { authenticated, logout }
  },
  data() {
    return {
      navLinks: [
        { name: 'Antrian', path: 'admin' }
      ],
      authLinks: [
        { name: 'Login', path: 'auth.login' }, 
        { name: 'Register', path: 'auth.register' },
      ],
    }
  },
}
</script>

<style scoped>
.active {
  color: #42b883 !important;
  font-weight: bold;
}
.navbar-brand {
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #42b883;
}
.primary {
  color: #42b883;
}
.primary:hover {
  color: #4ADE80;
}
</style>