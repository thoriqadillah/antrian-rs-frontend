<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div v-for="poli in poliklinik" :key="poli" class="col-sm align-items-center pt-5" style="height: 90vh">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">{{ poli.nama_poli }}</h2>
            <p class="card-text">{{ poli.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import rsService from "../services/rs.service";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      poliklinik: undefined
    };
  },
  async mounted() {
    const res = await rsService.getPoli();
    this.poliklinik = res
  },
};
</script>
