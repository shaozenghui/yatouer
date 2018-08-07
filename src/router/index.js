import Vue from 'vue'
import Router from 'vue-router'
import newsContent from '../components/newsContent/newsContent'
import news from '../components/news/news'
import weather from '../components/weather/weather'
import joke from '../components/joke/joke'


Vue.use(Router)

export default new Router({
  routes: [
 	 {
    	path:'/news',
    	component:news
    },
 	
    {
    	path:'/newsContent',
    	component:newsContent
    },
    {
    	path:'/weather',
    	component:weather
    },
    {
    	path:'/joke',
    	component:joke
    },
    {
    	path:'*',
    	redirect:"/news"
    },
  ],
  linkActiveClass:'active'
})
