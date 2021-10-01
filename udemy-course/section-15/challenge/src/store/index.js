import {
    createStore
} from 'vuex';
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import products from './products/'
import cart from './cart/'

const store = createStore({
    modules: {
        products,
        cart
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    actions,
    getters,
    mutations,
})

export default store