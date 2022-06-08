<template>
<Navbar></Navbar>
<div class="container" style="height: 90vh;">
  <div class="row align-items-center" style="height: 90vh;">
    <div class="col text-center">
      <img src="./../assets/logo.png" alt="">
    </div>
    <div class="col-lg">
      <h1 class="judul">RS. Vue</h1>
      <h3 class="sub-judul">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    components: {
      Navbar
    },
}
</script>

<style scoped>
.judul {
  font-size: 5rem;
  font-family: sans-serif;
  font-weight: 900;
  color: #42b883;
}
.sub-judul {
  font-family: sans-serif;
  font-weight: medium;
}
</style>