<template>
    <div class="form-group mb-3 pr-4" v-for="input in inputs" :key="input">
        <div v-if="input.name == 'email'">
            <input type="email" class="form-control no-border shadow-lg py-2" aria-describedby="emailHelp" v-model="input.value" :placeholder="input.placeholder" required>
        </div>
        <div v-else-if="input.name == 'password'">
            <input type="password" class="form-control no-border shadow-lg py-2" v-model="input.value" :placeholder="input.placeholder" required>
        </div>
        <div v-else-if="input.name == 'poli'">
            <select class="form-select" v-model="input.value" required>
                <option disabled value="">Poliklinik</option>
                <option v-for="poli in poliklinik" :key="poli" :value="poli.id">{{ poli.nama_poli }}</option>
            </select>
        </div>
        <div v-else-if="input.name == 'nama'">
            <input v-if="user" class="form-control no-border shadow-lg py-2" :value="user.name" :placeholder="input.placeholder" disabled>
            <input v-else class="form-control no-border shadow-lg py-2" :placeholder="input.placeholder" required >
        </div>
        <div v-else>
            <input class="form-control no-border shadow-lg py-2" v-model="input.value" :placeholder="input.placeholder" required>
        </div>
    </div>
    <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary shadow-lg green">{{ btnText }}</button>
    </div>
</template>

<script>
export default {
    props: ['inputs', 'btnText', 'submitHandler', 'poliklinik', 'user'],
}
</script>

<style scoped>
.btn-primary {
    background: #42b883 !important;
    border: #42b883 !important;
}

.btn-primary:hover {
    background: #4ADE80 !important;
}
</style>