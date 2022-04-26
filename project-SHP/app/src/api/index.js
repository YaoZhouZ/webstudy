// 当前这个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动的接口
// /api/product/getBaseCategoryList GET 无参数
// 发请求：axios发请求返回结果Promise对象

export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => {
    return mockRequests({ url: '/banner', method: 'get' })
}

// 获取floor
export const reqFloorList = () => {
    return mockRequests({ url: '/floor', method: 'get' })
}

// 获取搜索模块数据 地址：/api/list 请求的方式：post 参数：需要带参数
// 当前这个函数需不需要接收外部传递参数
// 当前的这个接口(获取搜索模块的数据)，给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => {
    return requests({ url: '/list', method: 'post', data: params })
}

// 获取产品详情信息的接口 地址：/api/item/{ skuId } 请求的方式：get 
export const reqGoodsInfo = (skuId) => {
    return requests({ url: `/item/${skuId}`, method: 'get' })
}

// 将产品添加到购物车中（获取更新某一个产品的个数）地址：/api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'
    })
}

// 获取购物车列表数据的接口
// URL：/api/cart/cartList method:get
export const reqCartList = () => {
    return requests({
        url: '/cart/cartList', method: 'get'
    })
}

// 删除购物车产品的接口 /api/cart/deleteCart/{skuId}
export const reqDleteCartById = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`, method: 'delete'
    })
}

// 修改商品选中的状态 /api/cart/checkCart/{skuId}/{isChecked} get
export const reqUpdateCheckedById = (skuId, isChecked) => {
    return requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get'
    })
}

// 获取验证码 /api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => {
    return requests({
        url: `/user/passport/sendCode/${phone}`, method: 'get'
    })
}

// 注册 /api/user/passport/register post 参数：phone,code,password
export const reqUserRegister = (data) => {
    return requests({
        url: '/user/passport/register', method: 'post', data: data
    })
}

// 登录 /api/user/passport/login post 参数：phone,password
export const reqUserLogin = (data) => {
    return requests({
        url: '/user/passport/login', method: 'post', data: data
    })
}

// 获取用户的信息【需要带着用户的token向服务器要用户信息】 /api/user/passport/auth/getUserInfo get
export const reqUserInfo = () => {
    return requests({
        url: '/user/passport/auth/getUserInfo', method: 'get'
    })
}

// 退出登录 /api/user/passport/logout
export const reqLogout = () => {
    return requests({
        url: '/user/passport/logout', method: 'get'
    })
}

// 获取用户地址信息
export const reqAddressInfo = () => {
    return requests({
        url: '/user/userAddress/auth/findUserAddressList', method: 'get'
    })
}

// 获取商品清单
export const reqOrderInfo = () => {
    return requests({
        url: '/order/auth/trade', method: 'get'
    })
}

// 提交订单的接口
export const reqSubmitOrder = (tradeNo, data) => {
    return requests({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data
    })
}

// 获取支付信息
export const reqPayInfo = (orderId) => {
    return requests({
        url: `/payment/weixin/createNative/${orderId}`, method: 'get'
    })
}

// 获取支付订单状态
export const reqPayStatus = (orderId) => {
    return requests({
        url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get'
    })
}

// 获取个人中心的数据
export const reqMyOrderList = (page, limit) => {
    return requests({
        url: `/order/auth/${page}/${limit}`, method: 'get'
    })
}
