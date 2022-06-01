<template>
<Navbar></Navbar>
<div class="container">
  <div class="d-flex justify-content-between align-items-center" style="height: 90vh;">
    <div></div>
    <div><img src="./../../assets/logo.png" alt="logo"></div>
    <div>
      <form class="px-3 py-5 rounded" @submit.prevent="submit">
        <FormGenerator :inputs="forms" :btn-text="btnText"></FormGenerator>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormGenerator from "../../components/FormGenerator.vue";
import { reactive } from '@vue/reactivity';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    components: {
      Navbar, FormGenerator
    },
    setup() {
      let forms = reactive([
          { placeholder: 'Username', value: '', name: 'username', isValid: true, valMsg: '' },
          { placeholder: 'Email', value: '', name: 'email', isValid: true, valMsg: ''  },
          { placeholder: 'Password', value: '', name: 'password', isValid: true, valMsg: ''  },
      ])
      
      const router = useRouter()

      const submit = async () => {
        const REGISTER_API = 'http://127.0.0.1:8000/api/register'
        
        const res = await axios.post(REGISTER_API, { 
          name: forms[0].value,
          email: forms[1].value,
          password: forms[2].value
        })

        router.push('/login')
      }

      return { forms, submit }
    },
    data() {
      return {
        btnText: 'Register'
      }
    },
}
</script>