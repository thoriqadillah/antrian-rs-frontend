<template>
  <NavbarAdmin></NavbarAdmin>
  <table class="table">
  <thead>
      <tr>
        <th scope="col">Poli</th>
        <th scope="col">Nomor Antrian</th>
        <th scope="col">Edit</th>
      </tr>
  </thead>
  <tbody>
    <tr v-for="poli, index in polis" :key="poli">
      <th scope="row">{{ poli.nama_poli }}</th>
      <td>{{ nomor[index].nomor }}</td>
      <td>
            <button
              type="button"
              class="btn btn-success"
              @click="selesai"
              :data-id="index+1">
              Selesai
            </button>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>

import NavbarAdmin from "../../components/NavbarAdmin.vue";
import adminService from "../../services/admin.service";


export default {
  components: {
    NavbarAdmin
  },
  data() {
    return {
      new_nomor : undefined,
      nomor : undefined,
      polis : undefined
    };
  },
  async mounted() {
    const {nomor, polis} = await adminService.getAntrian();
    this.nomor = nomor
    this.polis = polis
  },
  methods: {
    async selesai(event){
      console.log(event.target.dataset);
      console.log('poli_id:', event.target.dataset.id);

      const data = { poli_id: event.target.dataset.id};
      const new_nomor = await adminService.updateAntrian(data);
      if (new_nomor == null){
       return;
      }
      this.nomor[data.poli_id - 1].nomor = new_nomor.data;
      
    }    
  }
};
</script>
