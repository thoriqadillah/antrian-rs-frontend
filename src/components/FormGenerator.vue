<template>
    <form class="px-3 py-5 rounded">
        <div class="form-group mb-3 pr-4" v-for="input in forms" :key="input">
            <input type="email" class="form-control no-border shadow-lg py-2" aria-describedby="emailHelp" v-model="input.value" :placeholder="input.placeholder">
        </div>
        <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary shadow-lg green">{{ btnText }}</button>
        </div>
    </form>
</template>

<script>
export default {
    props: ['forms', 'btnText']
}
</script>

<style>
.green {
    background: #42b883;
    border: #42b883;
}

.green:hover {
    background: #4ADE80;
}
</style>