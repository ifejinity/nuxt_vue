export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    // return {
    //     message: `Hello, ${name}! you are ${age} years old.`
    // }

    const data = await $fetch('https://fakestoreapi.com/products');
    return data;
})