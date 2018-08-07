import types from '../types.js'
import axios from "axios"

const state = {
	newsList:[],
}

const getters = {
	newsList(state){
		return state.newsList
	}
}

const actions = {
 	getNewslist({commit,state},data){
		axios.get(`https://route.showapi.com/109-35?channelId=&channelName=&id=&maxResult=20&needAllList=0&needContent=0&needHtml=0&page=${data.currentPage}&showapi_appid=56337&title=${data.name}&showapi_sign=5f12cb45fa964c6fa7ddbf15fa80ece7`)
	    .then(resp=>{
	       
	       if(resp.data.showapi_res_body.pagebean.contentlist.length != 0){
	    		commit(types.GETNEWSLIST,resp.data.showapi_res_body.pagebean.contentlist)
	    	}else{
	    		alert('暂无数据')
	    	}
	    }).catch(err=>{
	       alert(err)
	    })
 		
 	}
}

const mutations = {
	[types.GETNEWSLIST](state,data){
		return state.newsList = data 
		console.log(state.loading)
	}
}

export default {
	state,
	actions,
	mutations,
	getters,
}