<template>
<Navbar></Navbar>
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
import { useRouter } from 'vue-router';
import authService from '../../services/auth.service'
import { useStore } from 'vuex';

export default {
    components: {
      Navbar, FormGenerator
    },
    setup() {
      const router = useRouter()
      const store = useStore()

      const inputs = reactive([
          { placeholder: 'Email', value: '', name: 'email' },
          { placeholder: 'Password', value: '', name: 'password' },
      ])

      const submit = async () => {
        const userInput = {
          email: inputs[0].value,
          password: inputs[1].value
        }
        
        const { status, data } = await authService.login(userInput)
        if (status == 200) {
          store.dispatch('authenticateUser', true)
          store.dispatch('saveUser', data.user)
          if(data.user.is_admin==1){
            router.push('/admin')
          }else
          router.push('/')
        }
      }

      return { inputs, submit }
    },
    data() {
      return {
        btnText: 'Login',
      }
    },
}
</script>