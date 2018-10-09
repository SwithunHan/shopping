<template>

    <div class="content">
        <Header></Header>
        <swiper :options="swiperOption" ref="mySwiper" class="lunbo">
            <!-- slides -->
            <swiper-slide v-for="img in swiperImg" :key="img.id">
                <a :href="img.href">
                    <img :src="img.src" alt="">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
        <item-list></item-list>
        <GoodsList :goodsList="goodsList"></GoodsList>
    </div>

</template>

<script>
    // @ is an alias to /src
    import Header from '../components/Header'
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import ItemList from "../components/ItemList";
    import GoodsList from "../components/goodsList";


    export default {
        name: 'home',
        components: {
            GoodsList,
            ItemList,
            Header,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperImg: [
                    {
                        id: 1,
                        href: "",
                        src: "http://gw.alicdn.com/imgextra/i1/131/O1CN011Cq2LZFNZtwbVBC_!!131-0-lubanu.jpg"
                    },
                    {
                        id: 2,
                        href: "",
                        src: "http://gw.alicdn.com/imgextra/i2/200/O1CN011DLdfxzHQ4AB7mO_!!200-0-lubanu.jpg"
                    },
                    {
                        id: 3,
                        href: "",
                        src: "http://gw.alicdn.com/imgextra/i1/164/O1CN011D59PpEUqnwIakX_!!164-0-lubanu.jpg"
                    },
                    {
                        id: 4,
                        href: "",
                        src: "http://img.alicdn.com/imgextra/i1/13/O1CN011BxzbpUcHnjYYCu_!!13-0-luban.jpg"
                    },
                ],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    autoplay: true,
                },

                goodsList: [
                    {
                        id: 1,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    },
                    {
                        id: 2,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: 3,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: 4,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: 5,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: 6,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: 7,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: 8,
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    },
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },

    }
</script>
<style scoped>

    .lunbo a img {
        display: inline-block;
        width: 100%;
    }

    .lunbo a {
        display: inline-block;
    }
</style>
