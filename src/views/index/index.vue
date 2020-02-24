<template>
    <div class="container">
        <div class="vp_home">
            <homeswipe></homeswipe>
            <van-notice-bar
                color="#1989fa"
                background="#ecf9ff"
                left-icon="volume-o"
            >通知要求，各地各部队要结合学习贯彻党的十九届四中全会精神，开展形式多样的双拥宣传教育活动，大力弘扬爱我人民爱我军的社会风尚。</van-notice-bar>
            <van-grid :column-num="3" :icon-size="35">
                <van-grid-item :to="'testfrom'">
                    <van-icon name="ecard-pay" size="35" color="#1989fa"></van-icon>
                    <label>表单</label>
                </van-grid-item>
                <van-grid-item :to="'test'">
                    <van-icon name="idcard" size="35" color="#1989fa"></van-icon>
                    <label>表格</label>
                </van-grid-item>
                <van-grid-item :to="'zzz'">
                    <van-icon name="chat-o" size="35" color="#1989fa"></van-icon>
                    <label>个人中心</label>
                </van-grid-item>
                <van-grid-item @click="showToast">
                    <van-icon name="setting-o" size="35" color="#1989fa"></van-icon>
                    <label>系统设置</label>
                </van-grid-item>
                <van-grid-item :to="'testfrom'">
                    <van-icon name="ecard-pay" size="35" color="#1989fa"></van-icon>
                    <label>表单</label>
                </van-grid-item>
                <van-grid-item>
                    <van-icon name="idcard" size="35" color="#1989fa"></van-icon>
                    <label>表格</label>
                </van-grid-item>
                <van-grid-item :to="'zzz'">
                    <van-icon name="chat-o" size="35" color="#1989fa"></van-icon>
                    <label>个人中心</label>
                </van-grid-item>
                <van-grid-item :to="'notice'">
                    <van-icon name="setting-o" size="35" color="#1989fa"></van-icon>
                    <label>系统设置11111</label>
                </van-grid-item>
            </van-grid>
        </div>
        <!-- 底部栏tabar -->
        <tabarBottom></tabarBottom>
    </div>
</template>
<script>
import homeswipe from "./components/homeswipe";
export default {
  components: {
    homeswipe
  },
  data() {
    return {};
  },
  methods: {
    tohome() {
      alert(1);
    },
    showToast() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "弹窗内容"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },

    topersin() {
      this.$router.push("/personalcenter");
    }
  }
};
</script>
<style lang="less" scoped>

</style>