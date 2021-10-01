export default {
    removeProductFromCart(context, payload) {
        context.commit('removeProductFromCart', payload)
    },

    addProductToCart(context, payload) {
        context.commit('addProductToCart', payload)
    }
}