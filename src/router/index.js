import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' // 是App的子组件
import Home from '@/components/Home'
import Welcome from '@/components/Welcome' // 具体是home的子组件
import User from '@/components/User' // 具体是home的子组件
import Rights from '@/components/Rights' // 具体是home的子组件

Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: Welcome
    }, {
      path: '/users',
      component: User
    }, {
      path: '/rights',
      component: Rights
    }]
  }]
})
// 路由导航守卫，检测 token 如果不存在，就跳转到 login 登录组件去
router.beforeEach((to, from, next) => {
  // 访问/login 就直接pass
  if (to.path === '/login') {
    return next()
  }

  // 访问非login,判断 token
  var token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next() // token 存在，继续访问
})

export default router
