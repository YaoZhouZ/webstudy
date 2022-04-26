// 引入一级路由组件
// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
// 路由配置的信息
export default [
    {
        path: '/center',
        component: Center,
        name: 'center',
        meta: {
            show: true
        },
        // 二级路由组件
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        name: 'paysuccess'
    },
    {
        path: '/pay',
        component: Pay,
        name: 'pay',
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车来
            if (from.path == '/trade') {
                next()
            } else {
                // 其他的路由组件而来，停留在当前
                next(false)
            }
        },
    },
    {
        path: '/trade',
        component: Trade,
        name: 'trade',
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车来
            if (from.path == '/shopcart') {
                next()
            } else {
                // 其他的路由组件而来，停留在当前
                next(false)
            }
        },
    },
    {
        path: '/shopcart',
        component: ShopCart,
        name: 'shopcart',
        meta: {
            show: true
        }
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        name: 'addcartsuccess',
        meta: {
            show: true
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: '/home',
        component: () => import("@/pages/Home"),
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {
            show: true
        },
        name: 'search',
        // 路由组件能不能传递props数据
        // 布尔值写法
        // props:true
        // 对象写法：额外的给路由组件传递一些props
        // props:{a:1,b:2}
        // 函数写法：可以params参数、query参数，通过props传递给路由组件
        /* props:($route)=>{
            return {keyword:$route.params.keyword,k:$route.query.keyword}
        } */
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '/',
        redirect: "/home"
    },

    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('@/pages/Communication/EventTest/EventTest')
            },
            {
                path: 'modul',
                component: () => import('@/pages/Communication/ModulTest/ModulTest')
            },
            {
                path:'sync',
                component:()=>import('@/pages/Communication/SyncTest/SyncTest')
            },
            {
                path:'attrslisteners',
                component:()=>import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest')
            },
            {
                path:'childrenparent',
                component:()=>import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest')
            },
            {
                path:'scopeslot',
                component:()=>import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest')
            }
        ]
    }
]