<template>
    <li class="item">
        <router-link to="">
            <img :src="item.img" alt="">
            <h6>{{item.title}}</h6>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props: ["item"],
        created() {
        }
    }

</script>

<style scoped>
    .item {
        width: 1.9rem;
        text-align: center;
        margin-top: 5px;
    }

    a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
    }

    img {
        width: 60%;
    }
    h6{
        font-size: 10px;
    }
</style>