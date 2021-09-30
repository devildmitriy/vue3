import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

const counterModule = {
    state() {
        return {
            counter: 0
        }
    },
    mutations,
    actions,
    getters
}
export default counterModule;