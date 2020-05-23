export const state = () => ({
    users: []
})

export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
    LOGOUT_USER(state) {
        state.currentUser = {}
        window.localStorage.currentUser = JSON.stringify({})
    },
    SET_CURRENT_USER(state, user) {
        state.currentUser = user
        window.localStorage.currentUser = JSON.stringify(user)
    }
}

export const actions = {
    async login({ commit, dispatch }, loginInfo) {
        try {
            let response = await Api().post('/sessions', loginInfo)
            let user = response.data.data.attributes

            commit('SET_CURRENT_USER', user)
            dispatch('loadPlayedVideos', user.id)
            return user
        } catch {
            return {
                error:
                    'Email/password combination was incorrect.  Please try again.'
            }
        }
    },
    async register({ commit, dispatch }, registrationInfo) {
        try {
            let response = await Api().post('/users', registrationInfo)
            let user = response.data.data.attributes

            commit('SET_CURRENT_USER', user)
            dispatch('loadPlayedVideos', user.id)
            return user
        } catch {
            return { error: 'There was an error.  Please try again.' }
        }
    }
}
