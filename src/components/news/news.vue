<template>
  <div id="app">
     <el-table
         :data="tableData"
         style="width: 100%" max-height="100%" border 
         @selection-change="handleSelectionChange" 
          v-loading="loading2"  
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading">
         <el-table-column label="channelId编号" >
           <template slot-scope="scope">
             <span style="margin-left: 10px">{{ scope.row.channelId }}</span>
           </template>
         </el-table-column>
          <el-table-column label="名称" >
           <template slot-scope="scope">
             <span style="margin-left: 10px">{{ scope.row.name}}</span>
           </template>
         </el-table-column>
         <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button size="mini" type="dafult">
                 <router-link :to="'/newsContent?name='+ scope.row.name">查看</router-link>
              </el-button>
             <el-button
               size="mini"
               type="danger"
               @click="handleDelete(scope.$index, scope.row)">删除</el-button>
           </template>
         </el-table-column>
       </el-table>
  </div>
</template>

<script>

export default {
  data(){
    return {
        tableData: [],
        loading2:true

    }
  },
  created(){
    this.axios.get("https://route.showapi.com/109-34?showapi_appid=56337&showapi_sign=5f12cb45fa964c6fa7ddbf15fa80ece7")
    .then(resp=>{
      this.tableData = resp.data.showapi_res_body.channelList;
      this.loading2 = false;
    }).catch(err=>{
      console.log(err)
    })
  },
  methods:{
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(this.tableData[index],1)
    },
     handleSelectionChange(val) {
        // this.multipleSelection = val;
        // console.log(val)
    }
  }


}
</script>

<style>
  .active {
    color: red;
  }
  .el-loading-spinner{
    top: 200px !important;  
  }
</style>
