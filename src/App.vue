<template>
    <div id="app">
        <Header></Header>
        <keep-alive include="home">
            <router-view/>
        </keep-alive>
        <Footer></Footer>
    </div>
</template>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
<script>
    import Footer from "./components/Footer";
    import Header from "./components/Header";

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>