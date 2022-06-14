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
import { useRouter } from 'vue-router';
import authService from '../../services/auth.service'

export default {
    components: {
      Navbar, FormGenerator
    },
    setup() {
      const router = useRouter()

      let forms = reactive([
          { placeholder: 'Username', value: '', name: 'username'},
          { placeholder: 'Email', value: '', name: 'email' },
          { placeholder: 'Password', value: '', name: 'password' },
      ])
      
      const submit = async () => {
        const user = {
          name: forms[0].value,
          email: forms[1].value,
          password: forms[2].value
        }

        const { status } = await authService.register(user)
        if (status == 200) router.push('/login')
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