<template>
    <div class="footer">
        <div class="item-icon">
            <router-link to="/" :class="{action:route==='home'}">
                <font-awesome-icon :icon="['fas', 'home']"/>
                <h6>首页</h6>
            </router-link>
        </div>
        <div class="item-icon">
            <router-link to="/recommend" :class="{action:route==='recommend'}">
                <font-awesome-icon :icon="['fas', 'list-ul']"/>
                <h6>推荐</h6>
            </router-link>
        </div>
        <div class="item-icon">
            <router-link to="/chat" :class="{action:route==='chat'}">
                <font-awesome-icon :icon="['fas', 'comments']"/>
                <h6>消息</h6>
            </router-link>
        </div>
        <div class="item-icon">
            <router-link to="/shopping" :class="{action:route==='shopping'}">
                <font-awesome-icon :icon="['fas', 'shopping-cart']"/>
                <h6>购物车</h6>
            </router-link>
        </div>
        <div class="item-icon">
            <router-link to="/personal" :class="{action:route==='personal'}">
                <font-awesome-icon :icon="['fas', 'user']"/>
                <h6>个人中心</h6>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                route: ''
            }
        },
        watch: {
            $route: {
                handler() {
                    let path = this.$route.path.slice(1);
                    if (["recommend","chat","shopping","personal"].includes(path)) {
                        this.route = path
                    } else {
                        this.route = "home"
                    }

                },
                immediate:true
            }

        },
    }
</script>

<style scoped>
    .footer {
        display: flex;
        position: fixed;
        bottom: 0;
        background: #ffffff;
    }

    .item-icon {
        width: 2rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .5rem;
    }

    .item-icon h6 {
        font-size: 10px;
    }

    .action {
        color: #06c1ae;
    }
</style>