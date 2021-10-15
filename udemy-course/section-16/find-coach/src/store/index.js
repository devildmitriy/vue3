import {
    createStore
} from 'vuex';
import coaches from './modules/coaches';
import requests from './modules/requests'
const store = createStore({
    modules: {
        coaches,
        requests
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store;