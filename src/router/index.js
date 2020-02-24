import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => (require(["@/views/index/index"], resolve)),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: resolve => (require(["@/views/notice/notice"], resolve)),
      meta: {
        title: '公告'
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: resolve => (require(["@/views/personal/personal"], resolve)),
      meta: {
        title: '公告'
      }
    }
  ]
})
// 全局路由守
// const router = new Router();
// router.beforeEach((to, from, next) => {
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: 回调函数: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//   const isPath = to.path.split('/')[1];
//   if (isPath != 'about') {//判断是否需要登录
//     next()
//   } else {
//     MessageBox.alert('你还未登录,请先登录', '提示', {
//       confirmButtonText: "确定",
//       showClose: false,
//       callback: () => {
//         next({
//           path: "/cms/login",
//           query: {
//             redirect: to.fullPath
//           }
//         });
//       }
//     })
//   }
// })
