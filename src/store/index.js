import Vue from "vue"
import Vuex from "vuex"

import getters from './getters'
import actions from './actions'
import news from './modules/news'
import weather from './modules/weather'
import joke from './modules/joke'
Vue.use(Vuex)
export default new Vuex.Store({
	getters,
	actions,
	modules:{
		news,
		weather,
		joke
	}
})