<template>
    <div class="header">
        <area-select v-model="selected" :data="pca" :level="0" class="city"></area-select>
        <div class="search">
            <input type="text" placeholder="商品/商品编号" @keyup.enter="search" v-model="goods.name">
        </div>
        <div class="person">
            <router-link to="" class="personLink"></router-link>
        </div>
    </div>
</template>

<script>
    import {pca, pcaa} from 'area-data';
    import 'vue-area-linkage/dist/index.css'
    import {getGoodsList} from '../api'
    export default {

        name: "Header",
        components: {},
        data() {
            return {
                selected: ["110000"],
                pca: pca,
                pcaa: pcaa,
                goods: {
                    name:""
                }
            }
        },
        created() {
        },
        methods: {
            search: function () {
                getGoodsList(this.goods).then(res=>{
                  console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        background: #06c1ae;
        /*align-items: center;*/
        height: 40px;
        /*padding: 4px;*/
        box-sizing: border-box;
    }

    .city {
        color: #fff;
        padding: 4px 0;
    }

    .search {
        flex: 1;
        background: white;
        height: 28px;
        margin: 6px;
        border-radius: 10px;
    }

    .search input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 15px;
        vertical-align: top;
        border: none;
        outline: none;
        background: transparent;
    }

    .person {
        width: 26px;
        height: 26px;
        border-radius: 100%;
        background: white;
        overflow: hidden;
        margin: 8px 10px 8px 10px;
    }

    .person .personLink {
        display: block;
        width: 100%;
        height: 100%;
        background: url("../assets/logo.png");
        background-size: 100% 100%;
    }
</style>