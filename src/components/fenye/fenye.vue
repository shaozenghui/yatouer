<template>
	<div>
		<el-pagination class='fenye' background layout="prev, pager, next" :total="currentPage.pageTotal" :page-count="currentPage.pageCount" :current-page="currentPage.page" @current-change="change">
		</el-pagination>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				 
			}
		},
		props:["currentPage"],
		methods: {
	     change(e){

	        this.currentPage.page = e;
	      }
	    }
	}
</script>
<style lang="less" scoped>
.fenye{
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -200px;
  }
</style>