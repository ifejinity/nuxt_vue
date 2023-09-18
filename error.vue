<template>
    <div class="max-w-sm mx-auto text-center card">
        <p class="text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="text-6xl">Oooops.</p>
        <p class="">{{ error.message }}</p>
        <NuxtLink to="/" class="mt-7 btn">Back to home</NuxtLink>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style scoped>
    .card {
        @apply flex flex-col gap-5 min-h-screen justify-center
    }
</style>