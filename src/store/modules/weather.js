import types from '../types.js'
import axios from "axios"

const state = {
	weathersList:[],
}

const getters = {
	weathersList(state){
		return state.weathersList
	}
}

const actions = {
 	getWeatherList({commit,state},data){
		axios.get(`https://route.showapi.com/9-9?area=${data}&showapi_appid=56337&showapi_sign=5f12cb45fa964c6fa7ddbf15fa80ece7`)
		.then(resp=>{
	    	if(resp.data.showapi_res_body.dayList.length != 0){
	    		commit(types.GETWEATHERLIST,resp.data.showapi_res_body.dayList)
	    	}else{
	    		alert('暂无数据')
	    	}
	        
	    }).catch(err=>{
	       alert(err)
	    })
 		
 	}
}

const mutations = {
	[types.GETWEATHERLIST](state,data){
		return state.weathersList = data 
	}
}

export default {
	state,
	actions,
	mutations,
	getters,
}