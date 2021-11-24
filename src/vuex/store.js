import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            convertFileData: null
        }
    },
    mutations: {
        setConvertFileData(state, payload) {
            state.convertFileData = payload
        }
    },
    getters: {
        getConvertFileData: state => state.convertFileData
    }
})
