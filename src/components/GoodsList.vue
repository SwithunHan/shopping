<template>
    <div class="goodsList">
        <Good v-for="good in goodsList" :good="good" :key="good.id"></Good>
    </div>
</template>

<script>
    import Good from "./Good";
    export default {
        name: "goodsList",
        components: {Good},
        props:["goodsList"],
    }
</script>

<style scoped>
    .goodsList{
        padding-bottom: 2.2rem;
    }
</style>