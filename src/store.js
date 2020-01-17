import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rubricsData: [],
    postsData: [],
    videosData: [],
    docs: [
      [
        {
          type: `title`,
          content: `Название документации`,
        },
        {
          type: `img`,
          content: `@/assets/anonim.jpg`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem`
        },
      ],
      [
        {
          type: `title`,
          content: `Название документации`,
        },

        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
        {
          type: `img`,
          content: `@/assets/anonim.jpg`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
      ],
      [
        {
          type: `title`,
          content: `Название документации`,
        },
        {
          type: `img`,
          content: `@/assets/anonim.jpg`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок 1`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reprehenderit praesentium molestias explicabo non labore modi libero! Sunt ratione illo ullam nihil omnis modi animi, debitis fugiat deserunt excepturi pariatur odit eius unde nobis a atque consequuntur fuga praesentium eos dolor eligendi deleniti exercitationem eveniet? Voluptates numquam omnis aspernatur mollitia!`
        },
      ],
      [
        {
          type: `title`,
          content: `Название документации`,
        },
        {
          type: `img`,
          content: `@/assets/anonim.jpg`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem`
        },
        {
          type: `description`,
          subTitle: `Подзаголовок`,
          content: `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem`
        },
      ],
    ]
  },
  mutations: {
    setRubrics(state, payload) {
      state.rubricsData.push(payload)
    },
    clearRubrics(state) {
      state.rubricsData = []
    },
    setPosts(state, payload) {
      state.postsData.push(payload)
    },
    clearPosts(state) {
      state.postsData = []
    },
    setVideos(state, payload) {
      state.videosData.push(payload)
    },
    clearVideos(state) {
      state.videosData = []
    }
  },
  actions: {
    setRubrics({ commit }, payload) {
      // console.log(payload)
      commit(`setRubrics`, payload)
    },
    clearRubrics({ commit }) {
      commit(`clearRubrics`)
    },
    setPosts({ commit }, payload) {
      // console.log(payload)
      commit(`setPosts`, payload)
    },
    clearPosts({ commit }) {
      commit(`clearPosts`)
    },
    setVideos({ commit }, payload) {
      commit(`setVideos`, payload)
    },
    clearVideos({ commit }) {
      commit(`clearVideos`)
    },
  },
  getters: {
    docs: state => state.docs
  }
})
