<template>
    <div class="itemList">
        <ul>
            <Item v-for="item in items" :item=item></Item>
        </ul>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: "ItemList",
        components: {Item},
        data() {
            return {
                items: [
                    {
                        img: "http://img.alicdn.com/tfs/TB1SnYkGXOWBuNjy0FiXXXFxVXa-168-168.png_170x120Q90s50.jpg_.webp",
                        title: "生鲜水果"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1gOJ0pLuSBuNkHFqDwu0fhVXa.png_170x120Q90s50.jpg_.webp",
                        title: "休闲零食"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1uqxzdb3nBKNjSZFMSuuUSFXa.jpg_170x120Q90s50.jpg_.webp",
                        title: "奶品水饮"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1mFaJcnCWBKNjSZFtSuuC3FXa.jpg_170x120Q90s50.jpg_.webp",
                        title: "厨房粮油"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1OMFQhXmWBuNjSspdSuvugXXa.jpg_170x120Q90s50.jpg_.webp",
                        title: "家用电器"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB14SqehXuWBuNjSspnSut1NVXa.jpg_170x120Q90s50.jpg_.webp",
                        title: "母婴用品"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1FzTLhmtYBeNjSspkSuvU8VXa.jpg_170x120Q90s50.jpg_.webp",
                        title: "个人护理"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1U1yXhkOWBuNjSsppSutPgpXa.jpg_170x120Q90s50.jpg_.webp",
                        title: "家清家居"
                    }, {
                        img: "http://img.alicdn.com/tfs/TB16ss1rrorBKNjSZFjXXc_SpXa-168-168.png_170x120Q90s50.jpg_.webp",
                        title: "进口好货"
                    }, {
                        img: "http://img.alicdn.com/tps/i4/TB1DFmEgcfpK1RjSZFOwu16nFXa.png_170x120Q90s50.jpg_.webp",
                        title: "秋日出游"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        display: grid;
        grid-template-columns: 2rem 2rem 2rem 2rem 2rem;
        padding: 0 0.1rem;
    }
</style>