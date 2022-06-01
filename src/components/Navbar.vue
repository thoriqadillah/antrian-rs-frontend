<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <div>
      <a href="#" class="navbar-brand">VUE</a>
    </div>
    
    <div id="navLinks">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="link in navLinks" :key="link">
            <router-link :to="{ name: link.path }" class="nav-link">{{ link.name }}</router-link>
          </li>
          <li class="nav-item" v-for="auth in authLinks" :key="auth">
            <router-link :to="{ name: auth.path }" class="nav-link">{{ auth.name }}</router-link>
          </li>
        </ul>
      </div>  
    </div>    
  </nav>  
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navLinks: [
        { name: 'Home', path: 'index' }, 
        { name: 'Antrian', path: 'antrian' },
        { name: 'Poliklinik', path: 'poli' }
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
</style>