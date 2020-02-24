<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* 全局公共样式 */
html,body{
  background-color: #f8f8f8;
}
.vp-form {
  padding-bottom: 50px;
}

.vp-form-dataitem {
  border: 1px solid #dcd9d9;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  /*overflow:auto;*/
}

.vp-form-panel {
  margin: 5px;
  text-align: center;
}

.vp-form-panel-addbtn {
  width: 80%;
  margin: 10px;
  color: azure;
  background-color: Background;
}
</style>
