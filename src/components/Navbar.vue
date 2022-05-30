<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <div class="navbar-brand">
      <router-link :to = "{ name: 'index' }" class="navbar-brand">SI PALING VUE JS</router-link>
    </div>

    <div id="navLink">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'index' }" class="nav-link ">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'antrian' }" class="nav-link">ANTRIAN</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'poli' }" class="nav-link">POLIKLINIK</router-link>
          </li>
        </ul>
      </div>  
    </div>

    <div id="auth">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'auth.login' }" class="nav-link">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'auth.register' }" class="nav-link">DAFTAR</router-link>
        </li>
      </ul>
    </div>
  </nav>  
</div>
</template>

<script>
export default {
  
  name: 'Navbar',
}
</script>