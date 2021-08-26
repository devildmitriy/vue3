const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            toggle: true,
            inlineStyle: ''
        }
    },
    computed: {
        toggleClass() {
            let result;
            if(this.toggle) result = 'visible'
            else result = 'hidden'
            return result;
        }
    }
})

app.mount('#assignment')