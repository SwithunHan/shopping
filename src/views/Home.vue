<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
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
            <GoodsList :goodsList="goodsList"></GoodsList>
        </div>
        <div class="loadStatus" v-show="loadStatus">
            <span class="rotate">
                <font-awesome-icon :icon="['fas', 'spinner']"/>
            </span>
            &nbsp;
            <span>加载中...</span>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import ItemList from "../components/ItemList";
    import GoodsList from "../components/GoodsList";
    import BScroll from 'better-scroll'

    export default {
        name: 'home',
        components: {
            GoodsList,
            ItemList,
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
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    },
                    {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    }, {
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    },
                ],
                options: {
                    click: true,
                    pullDownRefresh: false,
                    pullUpLoad: {
                        threshold: -50,
                    }
                },
                loadStatus: false
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            change() {
                setTimeout(() => {
                    //加载数据
                    this.goodsList = this.goodsList.concat({
                        id: Math.floor(Math.random() * 10000),
                        img: "http://img.alicdn.com/bao/uploaded/i1/725677994/TB2.W6rdwHqK1RjSZFkXXX.WFXa_!!725677994.jpg_620x10000Q50s50.jpg_.webp",
                        title: "维达超韧中规格抽纸",
                        des: "120抽x24包   3层",
                        price: "￥59.9",
                        oldPrice: "￥66.6"
                    },);
                    //重新计算高度
                    this.loadStatus = false;
                    this.scroll.refresh();
                    //完成上拉刷新
                    this.scroll.finishPullUp();
                }, 5000);
                console.log(1111);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper, this.options);
                //绑定上拉加载事件
                this.scroll.on('pullingUp', () => {
                    // this.isPullUpLoad = true
                    // this.$emit('pullingUp')
                    this.loadStatus = true;
                    this.scroll.refresh();
                    this.change();
                });
                console.log(this.scroll);
            })
        }

    }
</script>
<style scoped>
    .wrapper {
        height: 100vh;
    }

    .lunbo a img {
        display: inline-block;
        width: 100%;
    }

    .lunbo a {
        display: inline-block;
    }

    .loadStatus {
        position: fixed;
        top: 40px;
        left: 50%;
        transform: translate(-50%, 0);
        color: #06c1ae;
        font-size: 14px;
    }

    .rotate {
        display: inline-block;
        animation: rotateIcon 2s infinite linear;
    }

    @keyframes rotateIcon {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
