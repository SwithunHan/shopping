<template>
    <div class="home">
        <Header></Header>
        <swiper :options="swiperOption" ref="mySwiper" class="lunbo">
            <!-- slides -->
            <swiper-slide v-for="img in swiperImg">
                <a :href="img.href">
                    <img :src="img.src"  alt="">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
    </div>

</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header'
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: 'home',
        components: {
            Header,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperImg: [
                    {
                        href:"",
                        src:"http://gw.alicdn.com/imgextra/i1/131/O1CN011Cq2LZFNZtwbVBC_!!131-0-lubanu.jpg"
                    },
                    {
                        href:"",
                        src:"http://gw.alicdn.com/imgextra/i2/200/O1CN011DLdfxzHQ4AB7mO_!!200-0-lubanu.jpg"
                    },
                    {
                        href:"",
                        src:"http://gw.alicdn.com/imgextra/i1/164/O1CN011D59PpEUqnwIakX_!!164-0-lubanu.jpg"
                    },
                    {
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
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
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
