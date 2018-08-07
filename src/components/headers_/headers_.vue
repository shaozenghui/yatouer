<template>
  <div>
   <el-menu
     :default-active="activeIndex"
     class="el-menu-demo"
     mode="horizontal"
     @select="handleSelect"
     background-color="#545c64"
     text-color="#fff"
     active-text-color="#ffd04b">
      <router-link to="/news"  class="link">
         <el-menu-item index="1" >
           新闻
         </el-menu-item>
      </router-link>
      <router-link to="/weather" class="link">
         <el-menu-item index="2" >
           天气
         </el-menu-item>
      </router-link>
      <router-link to="/joke" class="link">
         <el-menu-item index="3" >
           笑话
         </el-menu-item>
      </router-link>
   </el-menu>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
         activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
    
  }
</script>
<style type="text/css" scoped>
  .link{
    width: 100px;
    text-align: center;
    float: left;
    text-decoration: none;
  }

</style>