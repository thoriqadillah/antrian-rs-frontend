<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div v-for="poli in poliklinik" :key="poli" class="col-sm align-items-center pt-5" style="height: 90vh">
        <div class="card shadow-lg rounded-5 no-border">
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
    console.log(res)
  },
};
</script>
<style scoped>
.card {
  width: 18rem;
  height: 60vh;
  /* background-color: #e0e6da; */
  box-shadow: 5px 10px #888888;
}
.rounded-5 {
  border-radius: 0.5rem;
}
</style>

