import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  cardsIndexpage: [],
  info: [],
  iframe: [],
  redovisning: [],
  bokslut: [],
  uppstart: [],
  lonespec: [],
  foretagsradgivning: [],
  reviews: [],
  contact: [],
  aboutus: []
})

export const mutations = {
  setPage(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getPage({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setPage', [response.items, obj.content_type])
    }
  }
}
