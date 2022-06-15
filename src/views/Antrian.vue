<template>
<Navbar></Navbar>
<div class="container">
  <div v-if="authenticated && terdaftar">
    <div class="card border-success px-3 pt-3 pb-1">
      <div class="card-body">
        Nomor antrian Anda
        <h2 class="fw-bolder" >{{ antrianUser }}</h2>
        <p>untuk {{ tanggal }}</p>
        <div class="text-end">
          <button class="btn btn-danger" @click="deleteAntrian">X</button>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-between align-items-center" :style="[authenticated  && terdaftar ? 'height: 50vh;' : 'height: 90vh;' ]">
    <div v-for="poli, index in antrianPoli" :key="poli">
      <div class="border text-center px-4 py-3 bg-light rounded-5">
        {{ poli.nama_poli }}
      </div>
      <h2 class="text-center px-4 py-5 bg-light mt-3 rounded-5">{{ nomorAntrian[index] != undefined ? nomorAntrian[index].nomor : '' }}</h2>
      <!-- <h2 class="text-center px-4 py-5 bg-light mt-3 rounded-5">{{ index }}</h2> -->

    </div>
    
    <div v-if="!terdaftar">
      <form class="px-3 py-5 rounded" @submit.prevent="submit">
        <FormGenerator :btnText="btnText" :inputs="forms" :poliklinik="antrianPoli" :user="user" :tanggal="tanggal"></FormGenerator>
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
        user: null,
        authenticated: this.$store.state.authenticated,
        tanggal: '',
        antrianUser: '',
        terdaftar: false
      }
    },
    methods: {
      async submit() {
        const formInput = {
          user_id: this.user.id,
          poli_id: this.forms[2].value,
          nama: this.user.name,
          tanggal: this.tanggal,
        }
        
        const { status } = await userService.daftarAntrian(formInput)
        if (status == 201) {
          this.terdaftar = true
          const { data } = await userService.getAntrianUser()
          this.antrianUser = `${data.data.loket} : ${data.data.nomor}`
        }
        
      },
      formatDateNow() {
        let date = new Date()
        let day = '' + (date.getDate())
        let month = '' + (date.getMonth() + 1)
        let year = '' + (date.getFullYear())

        if (day.length < 2) day = '0' + day
        if (month.length < 2) month = '0' + month

        return [day, month, year].join('-')
      },
      async deleteAntrian() {
        const { status } = await userService.deleteAntrian()
        if (status == 200) {
          this.terdaftar = false
        }
      }
    },
    async beforeMount() {
      const polis = await rsService.getPoli();
      this.antrianPoli = polis

      const { nomors } = await rsService.getAntrian()
      console.log(nomors)
      this.nomorAntrian = nomors
      
      this.user = this.$store.state.user;

      const { status, data } = await userService.getAntrianUser()
      this.tanggal = this.formatDateNow()
      if (status == 200 && data.data.length != 0) {
        this.antrianUser = `${data.data.loket} : ${data.data.nomor}`
        this.terdaftar = true
      }

    },
};
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
  background: #4ade80 !important;
}
.rounded-5 {
  border-radius: 0.5rem;
}
#delete {
  position: relative;
}
</style>
