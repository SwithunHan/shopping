<template>
    <div class="scanning" v-on:touchstart.prevent v-on:touchmove.prevent>
        <video id="video" ref="video" autoplay style=""></video>
        <!--描绘video截图-->
        <canvas id="canvas" ></canvas>
        <div class="top">

        </div>
        <div class="middle">
            <div class="left"></div>
            <div class="qrcode">
                <div class="heng"></div>
            </div>
            <div class="right"></div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>

<script>
    export default {
        name: "scanning",
        methods: {
            getUserMedia(constrains, success, error) {
                if (navigator.mediaDevices.getUserMedia) {
                    //最新标准API
                    navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
                } else if (navigator.webkitGetUserMedia) {
                    //webkit内核浏览器
                    navigator.webkitGetUserMedia(constrains).then(success).catch(error);
                } else if (navigator.mozGetUserMedia) {
                    //Firefox浏览器
                    navagator.mozGetUserMedia(constrains).then(success).catch(error);
                } else if (navigator.getUserMedia) {
                    //旧版API
                    navigator.getUserMedia(constrains).then(success).catch(error);
                }
            },
            success(stream) {
                //兼容webkit内核浏览器
                let CompatibleURL = window.URL || window.webkitURL;
                //将视频流设置为video元素的源
                this.$refs.video.src = CompatibleURL.createObjectURL(stream);
                //播放视频
                this.$refs.video.play();
            },
            error(error) {
                console.log("访问用户媒体设备失败：", error.name, error.message);
            }
        },
        mounted() {
            this.getUserMedia({
                video: {facingMode: { exact: "environment" } }
            }, this.success, this.error);
            context.drawImage(this.refs.video,0,0,480,320);
        }
    }
</script>

<style scoped>
    .scanning {
        display: flex;
        height: 100vh;
        flex-direction: column;
    }
    .top, .bottom, .left, .right {
        background: #555555;
        opacity: 0.1;
        flex: 1;
    }
    .top {
        flex: .5;
    }
    .middle {
        display: flex;
        height: 150px;
    }
    .qrcode {
        width: 150px;
        height: 150px;
        position: relative;
    }
    .heng {
        position: absolute;
        width: 70%;
        height: 0;
        margin: auto;
        border-top: 1px solid #41b983;
        top: 0;
        left: 0;
        right: 0;
        animation: scanner 3s alternate infinite linear;
    }
    @keyframes scanner {
        from {
            top: 0;
        }
        to {
            top: 100%;
        }
    }
    #canvas {
        width: 100vw;
        height: 100vh;
    }
    #video{
        /*width: 480px;*/
        /*height: 320px;*/
        position: absolute
    }
    #canvas{
        position: absolute;
        z-index: 22222;
    }
</style>