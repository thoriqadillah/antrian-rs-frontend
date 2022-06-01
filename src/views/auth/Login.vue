<template>
<Navbar></Navbar>
<div class="container">
  <div class="row align-items-center" style="height: 90vh;">
    <div class="col-8 text-center">
        <img src="./../../assets/logo.png" alt="logo">
    </div>
    <div class="col-4">
      <FormGenerator :forms="forms" :btn-text="btnText"></FormGenerator>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormGenerator from "../../components/FormGenerator.vue";

export default {
    components: {
      Navbar, FormGenerator
    },
    data() {
      return {
        forms: [
          { placeholder: 'Username', value: '', name: 'username' },
          { placeholder: 'Password', value: '', name: 'password' },
        ],
        btnText: 'Login'
      }
    },
}
</script>