<template>
  <div>
    <el-row style="margin: 50px;">
      <el-col :span="6" :offset="9">
        <el-input placeholder="请输入你要查询的天气地方名称" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" v-for="v in weathersList" class="item" :key="v.daytime">
        <h2>日期：{{v.daytime}}</h2>
        <el-col :span="12" class="items">
           <h3>白天</h3>
           <p>温度：{{v.day_air_temperature}}°</p>
           <p>风向：{{v.day_wind_direction}}</p>
           <p>天气状况：{{v.day_weather}}</p>
           <div>
             <img :src="v.day_weather_pic">
           </div>
        </el-col>
        <el-col :span="12" class="items">
           <h3>夜晚</h3>
           <p>温度：{{v.night_air_temperature}}°</p>
           <p>风向：{{v.night_wind_direction}}</p>
           <p>天气状况：{{v.night_weather}}</p>
           <div>
             <img :src="v.night_weather_pic">
           </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
         msg:'weather',
         input5:'上海'
      }
    },
    methods: {
      search(){
         this.$store.dispatch('getWeatherList',this.input5)
      }
    },
    created(){
      this.$store.dispatch('getWeatherList',this.input5)
    },
    computed:{
      ...mapGetters([
        "weathersList"
      ])
    }
    
  }
</script>
<style lang="less" scoped>
  .item{
    padding: 10px 50px;
    border: 1px dashed #dbdbdb;
    border-radius: 4px;
    background-image: url(../../assets/weather_bg.png);
    color:#fff;

  }
</style>