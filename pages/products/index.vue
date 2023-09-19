<template>
    <div class="w-full flex">
        <div class="flex flex-wrap gap-5 justify-center">
            <div v-for="item in products" class="cards">
                <ProductCard :product="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch products
    const {data: products} = await useFetch('/api/product')
    
    useHead ({
        title: 'Shop | Product'
    })
</script>

<style scoped>
    
</style>