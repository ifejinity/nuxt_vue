<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui. Ut iusto qui enim quae quasi odio ab saepe est nobis nesciunt unde culpa, vel maxime tenetur ratione dolorum ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi quisquam amet minima error sit, necessitatibus totam nostrum odio! Autem tempore ipsa nemo architecto atque. Esse molestias eius ab quod?</p>
    </div>
    {{ data }}
</template>

<script setup>
    useHead({
        title: 'Shop | About'
    })

    const {data} = await useFetch('/api/currency/GBP');
</script>

<style scoped>
    h1 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>