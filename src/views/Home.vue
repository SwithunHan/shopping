<template>
    <data-list>
        <swiper :options="swiperOption" ref="mySwiper" class="lunbo">
            <!-- slides -->
            <swiper-slide v-for="(img,index) in swiperImg" :key="index">
                <a :href="img.href">
                    <img :src="img.src" alt="">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
        <item-list></item-list>
    </data-list>
</template>

<script>
    // @ is an alias to /src
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import ItemList from "../components/ItemList";
    import DataList from '../components/DataList'

    export default {
        name: 'home',
        components: {
            "data-list":DataList,
            ItemList,
            swiper,
            swiperSlide,
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
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {},
        mounted() {

        }

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
