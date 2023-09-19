<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">Shop Product</NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4 flex justify-between border-t-2 text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </div>

        <!-- page contetnt here -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                
            </ul>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        @apply text-blue-500;
    }
</style>