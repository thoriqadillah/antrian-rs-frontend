<template>
<Navbar></Navbar>
<div class="container">
  <div class="d-flex justify-content-between align-items-center" style="height: 90vh;">
    <div>
      <div class="row border my-3 py-4 px-4 ms-2 bg-light">Poliklinik : a</div>
      <div class="row border my-3 py-4 px-4 ms-2 bg-light">Poliklinik : b</div>
      <div class="row border my-3 py-4 px-4 ms-2 bg-light">Poliklinik : c</div>
    </div>
    <div>
      <form class="px-3 py-5 rounded" @submit.prevent="submit">
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

      const submit = () => console.log(forms)
      return { forms, submit }
    },
    data() {
      return {
        btnText: 'Daftar Antrian',
      }
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

</style>