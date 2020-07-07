const actions = {
  setTvStatus: ({ commit }, TV_status) => {
    return commit('SET_TV_STATUS', TV_status)
  },
  setCurrentScreen: ({ commit }, currentScreen) => {
    return commit('SET_CURRENT_SCREEN', currentScreen)
  }
}

export default actions
