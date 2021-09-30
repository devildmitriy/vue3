import {
    createStore
} from 'vuex';
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';
import counterModule from './counter';



const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLogin: false,
        }
    },
    mutations,
    actions,
    getters
})

export default store;