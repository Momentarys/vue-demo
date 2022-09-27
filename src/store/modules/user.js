import { loginAPI } from '@/api//login'
export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    // 设置token 监听登录或者未登录
    async loginAction({ commit }, loginDate) {
      const { data } = await loginAPI(loginDate)
      console.log(data)
      // 接口 传参到后端
      // 后端数据发送给 mutations 更改后的数据
      commit('SET_TOKEN', data)
    }
  }
}
