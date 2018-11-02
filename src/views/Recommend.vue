<template>
    <data-list></data-list>
</template>

<script>
    import GoodsList from "../components/GoodsList"
    import DataList from "../components/DataList";

    export default {
        name: "Recommend",
        data() {
            return {
                options: {
                    click: true,
                    pullDownRefresh: false,
                    pullUpLoad: {
                        threshold: -50,
                    }
                },
            }
        },
        components: {
            DataList,
            GoodsList
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>