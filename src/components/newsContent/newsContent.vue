<template>
	<div >
		<ol >
			<li v-for="(v,k) in newsList" >
				<h3>{{v.channelName}}</h3>
				<p><a :href="v.link">{{v.title}}</a></p>
				<p>{{v.desc}}</p>
				<div class="imgList">
					<div v-for="m in v.imageurls" >
						<img :src="m.url">
					</div>
				</div>
				
				<p><span>{{v.source}}</span><span>{{v.pubDate}}</span></p>
			</li>
		</ol>
		<fenye :currentPage="currentPage"></fenye>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters} from "vuex"
	import fenye from '../fenye/fenye'
	export default {
		data(){
			return {
				newList:[],
				currentPage:{
		          page:'4',
		          pageCount:10,
		          pageTotal:100,

		        },
				loading2:true
			}
		},
		components:{
	      fenye
	    },
		created(){
			this.$store.dispatch('getNewslist',{
				name:this.$route.query.name,
				currentPage:this.currentPage.page
			})
		},
		computed:{
			...mapGetters([
				"newsList"
			])
		},
		watch:{
			currentPage:{
				handler(newv,oldv){
					this.$store.dispatch('getNewslist',{
						name:this.$route.query.name,
						currentPage:newv.page
					})
				},
				deep:true
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.imgList{
		width: 100%;
		overflow: hidden;
		img{
			float: left;
			margin: 10px;
		}
	}
	.el-loading-spinner{
		top: 200px !important;	
	}
</style>