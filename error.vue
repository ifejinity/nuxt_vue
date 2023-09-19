<template>
    <div class="max-w-sm mx-auto text-center card">
        <p class="text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="text-6xl">Oooops.</p>
        <p class="">{{ error.message }}</p>
        <button class="mt-7 btn" @click="handleClearError">Back to home</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({redirect: '/'});
</script>

<style scoped>
    .card {
        @apply flex flex-col gap-5 min-h-screen justify-center;
    }
</style>