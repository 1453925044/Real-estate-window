<template>
    <van-tabbar
        v-model="active"
        :fixed="true"
        :route="true"
        :border="true"
        :safe-area-inset-bottom="true"
        @change="onChange"
    >
        <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item replace to="/notice" icon="chat-o">公告</van-tabbar-item>
        <van-tabbar-item replace to="/personal" icon="friends">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onChange(e) {
      this.active = e;
    }
  }
};
</script>
<style lang="less" scoped>
</style>