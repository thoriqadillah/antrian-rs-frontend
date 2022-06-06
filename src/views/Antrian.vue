<template>
<Navbar></Navbar>
<div class="container">
  <div class="d-flex justify-content-between align-items-center" style="height: 90vh;">
    <div v-for="poli, index in antrianPoli" :key="poli">
      <div class="border text-center px-4 py-3 bg-light rounded-5">
        {{ poli.nama_poli }}
      </div>
      <h2 class="text-center px-4 py-5 bg-light mt-3 rounded-5">{{ nomorAntrian[index] }}</h2>
    </div>
    
    <div>
      <form class="px-3 py-5 rounded" @submit.prevent="getAntrian">
        <FormGenerator :btnText="btnText" :inputs="forms"></FormGenerator>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FormGenerator from "../components/FormGenerator.vue"
import { reactive } from '@vue/reactivity';
import rsService from '../services/rs.service'

export default {
    components: {
      Navbar, FormGenerator
    },
    setup() {
      const forms = reactive([
          { placeholder: 'Nama Lengkap', value: '', name: 'nama' },
          { placeholder: 'Tanggal', value: '', name: 'tanggal' },
          { placeholder: 'Poliklinik', value: '', name: 'poli' },
        ])
      
      return { forms }
    },
    data() {
      return {
        btnText: 'Daftar Antrian',
        nomorAntrian: [],
        antrianPoli: []
      }
    },
    async mounted() {
      const { nomor, polis } = await rsService.getAntrian()
      this.nomorAntrian = nomor
      this.antrianPoli = polis
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