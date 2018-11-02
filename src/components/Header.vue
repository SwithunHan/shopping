<template>
    <div class="header">
        <area-select v-model="selected" :data="pca" :level="0" class="city"></area-select>
        <div class="search">
            <input type="text" placeholder="商品/商品编号" @keyup.enter="search" v-model="goods.name">
        </div>
        <div class="qrcode">
            <router-link to="/scanning">
                <font-awesome-icon :icon="['fas', 'qrcode']"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {pca, pcaa} from 'area-data';
    import 'vue-area-linkage/dist/index.css'
    import {getGoodsList} from '../api'
    import {getCity, setCity} from "../utils/localStorge";
    export default {

        name: "Header",
        components: {},
        data() {
            return {
                selected: [],
                pca: pca,
                pcaa: pcaa,
                goods: {
                    name:""
                }
            }
        },
        created() {
            this.selected.push(getCity());
        },
        methods: {
            search: function () {
                getGoodsList(this.goods).then(res=>{
                  console.log(res.data)
                })
            }
        },
        watch:{
            selected:function (value) {
                setCity(value);
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        background: #06c1ae;
        height: 40px;
        box-sizing: border-box;
        position: relative;
        z-index: 111;
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

    .qrcode {
        width: 26px;
        height: 26px;
        font-size: 24px;
        overflow: hidden;
        margin: 8px 10px 8px 10px;
    }
</style>