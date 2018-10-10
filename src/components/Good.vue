<template>
    <div class="good">
        <div class="imgBox">
            <img :src="good.img" alt="">
        </div>
        <div class="goodDes">
            <h3>{{good.title}}</h3>
            <p>{{good.des}}</p>
            <div class="price">
                <span>{{good.price}}</span>
                <S v-if="good.oldPrice">{{good.oldPrice}}</S>
            </div>
        </div>
        <div class="lookDes">
            <router-link :to="{name:'goodDetail',params:{id: good.id}}">查看详情</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "good",
        props: ["good"]
    }
</script>

<style scoped>
    .good {
        display: grid;
        grid-template-columns: 4rem 5rem 1rem;
        border-bottom: 5px solid #fbfbfb;
    }

    .imgBox img {
        width: 80%;
    }

    .goodDes {
        font-size: 16px;
        font-weight: normal;
        text-align: left;
        padding-top: .5rem;
    }

    .goodDes h3 {
        font-weight: bolder;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .goodDes p {
        margin-top: .2rem;
    }

    .price {
        margin-top: .5rem;
    }

    .goodDes span {
        color: #06c1ae;
        margin-top: .2rem;
    }

    .goodDes S {
        font-size: 14px;
    }

    .lookDes {
        background: #06c1ae;
    }

    .lookDes a {
        display: inline-block;
        width: 50%;
        height: 100%;
        writing-mode: vertical-lr;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
    }
</style>