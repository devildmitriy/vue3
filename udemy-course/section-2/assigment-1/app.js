const app = {
    data() {
        return {
            name: 'Dmitriy',
            age: 27,
            url: 'https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg'
        }
    },
    methods: {
        changeAge() {
            return 5 + this.age
        }
    }
};

Vue.createApp(app).mount('#assignment')