import { reqGetSearchInfo } from "@/api"
// search模块的小仓库
const state = {
    // 仓库初始状态
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    // 获取search的数据
    async getSearchList({ commit }, params = {}) {
        // 当前这个reqGetSearchInfo在调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params形参：是当用于派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
// 计算属性，在项目当中，是为了简化数据而生
// 可以把我们将来在组件当中1需要用到的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
    // 当前形参state，当前仓库中的state，并非大仓库中的那个state
    goodsList(state){
        // state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
        // 假如网络不给力，没有网state.searchList.goodsList返回的是undifind
        // 计算属性的属性值至少是一个空数组
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}