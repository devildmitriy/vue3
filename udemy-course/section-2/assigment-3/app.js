const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num
        }
    },
    computed: {
        result() {
            if (this.counter < 37) return 'Not there yet';
            if (this.counter === 37) return 37;
            if (this.counter > 37 ) return 'Too much!';
        }
    },
    watch: {
        counter() {
            console.log('kek')
            that = this
            setTimeout(()=> that.counter = 0,5000)
        }
    }
})

app.mount('#assignment')