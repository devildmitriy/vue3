export default {
    increase(context, payload) {
        setTimeout(() => {
            context.commit('increase', payload)
        }, 2000)
    },
    increment(context) {
        setTimeout(() => {
            context.commit('increment')
        }, 2000)
    }
}