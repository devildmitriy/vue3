const app = Vue.createApp({
    data() {
        return {
            firstText: '',
            secondText: '',
        }

    },
    methods: {
        showAlert() {
            alert('kek')
        },
        kdown(e) {
            this.firstText = e.target.value;
        },
        kenter(e){
            this.secondText = e.target.value;
            console.log('kek')
        }
    }
})

app.mount('#assignment');