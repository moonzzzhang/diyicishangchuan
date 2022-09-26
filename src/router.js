import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue'
import Home from './components/Home'
Vue.use(Router)

 let router = new Router({
    routes: [
        {path:'/',redirect: '/Login'},
        {path:'/login',component: Login },
        {path:'/home', component: Home }
    ],
})
router.beforeEach((to,from,next)=>{
    //to 将要访问的路径
    //from 代表从哪个路径跳转来的
    //next 是一个函数,表示放行
    //next() 放行  next('/login') 强制跳转
    console.log(to);
    if(to.path == '/login') {
        next()
    } 
    //获取token
  let tokenStr =  window.sessionStorage.getItem('token') 
  if(!tokenStr){
    next('/login')
  }
  next()
})  
export default router