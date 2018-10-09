<template>
    <div class="goodsList">
        <Good v-for="good in goodsList" :good="good" :key="good.id"></Good>
    </div>
</template>

<script>
    import Good from "./good";
    export default {
        name: "goodsList",
        components: {Good},
        props:["goodsList"],
    }
</script>

<style scoped>
    .goodsList{
        padding-bottom: 1rem;
    }
</style>