<template>
    <div>
        <h1>{{ product.title }}</h1>
        <NuxtImg :src="product.image" alt="" srcset="" class="thumb"/>
        <NuxtLink :to="`/products/${product.id}`" class="text-white bg-blue-500 absolute bottom-3 right-3 btn">View details</NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
    .thumb{
        @apply max-h-[200px] max-w-[70%] mx-auto;
    }
</style>