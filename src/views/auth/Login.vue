<template>
<Navbar :isLoggedin="isLoggedIn"></Navbar>
<div class="container">
  <div class="d-flex justify-content-between align-items-center" style="height: 90vh;">
    <div></div>
    <div><img src="./../../assets/logo.png" alt="logo"></div>
    <div>
      <form class="px-3 py-5 rounded" @submit.prevent="submit">
        <FormGenerator :inputs="inputs" :btn-text="btnText"></FormGenerator>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormGenerator from "../../components/FormGenerator.vue";

import { reactive } from 'vue';
import axios from 'axios';

export default {
    components: {
      Navbar, FormGenerator
    },
    setup() {
      const inputs = reactive([
          { placeholder: 'Email', value: '', name: 'email' },
          { placeholder: 'Password', value: '', name: 'password' },
      ])

      const submit = async () => {
        const LOGIN_API = 'http://127.0.0.1:8000/api/login'
        
      }

      return { inputs, submit }
    },
    data() {
      return {
        btnText: 'Login',
        isLoggedIn: false
      }
    },
}
</script>