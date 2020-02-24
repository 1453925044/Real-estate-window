<template>
    <div>
        <van-swipe :autoplay="3000" class="vp-home-swipe">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "./static/20000/home/home1.png",
        "./static/20000/home/home2.png",
        "./static/20000/home/home3.png"
      ],
      active: 0
    };
  }
};
</script>
<style lang="less" scoped>
.van-swipe-item img {
  width: 100%;
  height: 180px;
}
</style>