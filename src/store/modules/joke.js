import types from '../types.js'
import axios from "axios"

const state = {
	jokeList:[],
}

const getters = {
	jokeList(state){
		return state.jokeList
	}
}

const actions = {
 	getJokeListList({commit,state},data){
		axios.get(`https://route.showapi.com/341-1?maxResult=20&page=${data}&showapi_appid=56337&showapi_sign=5f12cb45fa964c6fa7ddbf15fa80ece7`)
		.then(resp=>{
	    	if(resp.data.showapi_res_body.contentlist.length != 0){
	    		commit(types.GETJOKELIST,resp.data.showapi_res_body.contentlist)
	    	}else{
	    		alert('暂无数据')
	    	}
	        
	    }).catch(err=>{
	       alert(err)
	    })
 	}
}

const mutations = {
	[types.GETJOKELIST](state,data){
		return state.jokeList = data 
	}
}

export default {
	state,
	actions,
	mutations,
	getters,
}