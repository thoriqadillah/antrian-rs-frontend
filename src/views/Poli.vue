<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <!-- <div v-for="ds in deskripsiPoli" :key="ds">
        <div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h2 class="card-title">{{ namaPoli }}</h2>
              <p class="card-text">{{ deskripsiPoli }}</p>
            </div>
          </div>
        </div>
      </div> -->
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
      namaPoli: [],
      deskripsiPoli: [],
    };
  },
  async mounted() {
    const rest = await rsService.getPoli();
    console.log(rest);
    // this.namaPoli = nama;
    // this.deskripsiPoli = deskripsi;
  },
};
</script>
