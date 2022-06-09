<template>
<Navbar></Navbar>
<div class="container">
  <div class="d-flex justify-content-between align-items-center" style="height: 90vh;">
    <div v-for="poli, index in antrianPoli" :key="poli">
      <div class="border text-center px-4 py-3 bg-light rounded-5">
        {{ poli.nama_poli }}
      </div>
      <h2 class="text-center px-4 py-5 bg-light mt-3 rounded-5">{{ nomorAntrian[index].nomor }}</h2>
    </div>
    
    <div>
      <form class="px-3 py-5 rounded" @submit.prevent="submit">
        <FormGenerator :btnText="btnText" :inputs="forms" :poliklinik="antrianPoli" :user="user"></FormGenerator>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FormGenerator from "../components/FormGenerator.vue"
import rsService from '../services/rs.service'
import userService from '../services/user.service'
import { useRouter } from 'vue-router';

export default {
    components: {
      Navbar, FormGenerator
    },
    data() {
      return {
        forms: [
          { placeholder: 'Nama Lengkap', value: '', name: 'nama' },
          { placeholder: 'dd-mm-yyyy', value: '', name: 'tanggal' },
          { placeholder: 'Poliklinik', value: '', name: 'poli' },
        ],
        btnText: 'Daftar Antrian',
        nomorAntrian: [],
        antrianPoli: [],
        user: null
      }
    },
    methods: {
      async submit() {
        const router = useRouter()
        const formInput = {
          user_id: this.user.id,
          poli_id: this.forms[2].value,
          nama: this.user.name,
          tanggal: this.forms[1].value,
        }
        
        const { status } = await userService.daftarAntrian(formInput)
        if (status == 200) router.push('/antrian')
        
      }
    },
    async mounted() {
      const { nomor, polis } = await rsService.getAntrian()
      this.nomorAntrian = nomor
      this.antrianPoli = polis
      console.log(nomor, polis)

      this.user = this.$store.state.user
    },
}
</script>

<style scoped>
.no-border {
  border: 0;
}
.grey {
  font-weight: bolder;
  color: #242323;
}
.btn-primary {
    background: #42b883 !important;
    border: #42b883 !important;
}
.btn-primary:hover {
    background: #4ADE80 !important;
}
.rounded-5 {
  border-radius: 0.5rem;
}

</style>