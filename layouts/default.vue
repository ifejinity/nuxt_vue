<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="contatainer mx-auto p-4 flex justify-between items-center">
                <NuxtLink to="/" class="font-bold">Shop</NuxtLink>
                <ul class="flex gap-4 items-center">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn bg-blue-500 hover:bg-blue-400 text-white">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- page contetnt here -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        @apply text-blue-500;
    }
</style>