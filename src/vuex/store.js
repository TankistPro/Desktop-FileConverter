import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            convertFileData: null,
            configAppFile: null
        }
    },
    mutations: {
        setConvertFileData(state, payload) {
            state.convertFileData = payload
        },
        setConfigFile(state, payload) {
            state.configAppFile = payload
        }
    },
    getters: {
        getConvertFileData: state => state.convertFileData,
        getConfigFile: state => state.configAppFile
    }
})
