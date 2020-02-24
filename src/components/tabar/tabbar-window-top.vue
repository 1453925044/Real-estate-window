<template>
  <div class="tabbarTop">
    <van-nav-bar
      :title="title"
      :fixed="true"
      left-text="返回"
      @click-left="onBack"
      :z-index="999"
      left-arrow
    >
      <van-icon
        class="vanIcon"
        v-for="(item,index) in rightIcon"
        :key="index"
        @click="onChange(item)"
        :name="item.icon"
        slot="right"
      ></van-icon>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    onChange(item) {
      item.iconClick();
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
.tabbarTop {
  margin-bottom: 46px;
  .vanIcon {
    margin-left: 10px;
  }
}
</style>