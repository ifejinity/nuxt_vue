<template>
    <div class="flex md:flex-row flex-col gap-5">
        <NuxtImg :src="`${product.image}`" class="w-full md:w-[40%] w-full" />
        <div class="flex gap-5 flex-col md:w-[60%] w-full">
            <p class="text-[20px]">Product details for <span class="text-blue-500 font-medium">{{ product.title }}</span></p>
            <p class="text-[18px]">Price - ${{ product.price }}</p>
            <p class="font-thin tracking-wider border-t-2 pt-2">{{ product.description }}</p>
            <p class="badge bg-blue-500 text-white w-fit text-[14px]">{{ product.category }}</p>
        </div>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
    // head
    useHead({
        title: `Shop | ${product.title}`,
        meta: [
            {name: 'description', content: `Details for ${product.title}`}
        ]
    })
</script>

<style lang="scss" scoped>

</style>