<template>
  <div>
    <el-row  v-for="v in jokeList" :key="v.id">
       <el-col :span='24' >
           <h3>{{v.title}}</h3>
           <p v-html>{{v.text}}</p>
           <p >时间：{{v.ct}}</p>
       </el-col>
    </el-row>
    <fenye :currentPage="currentPage"></fenye>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import fenye from '../fenye/fenye'
  export default {
    data() {
      return {
        currentPage:{
          page:'4',
          pageCount:10,
          pageTotal:100,

        }
      }
    },
    components:{
      fenye
    },
    created(){
      this.$store.dispatch('getJokeListList',this.currentPage.page)
    },
    computed:{
      ...mapGetters([
        "jokeList"
      ])
    },
    watch:{
      currentPage:{
        handler(newv,oldv){
          this.$store.dispatch('getJokeListList',newv.page)
        },
        deep:true
      }
    }
    
  }
</script>