const app = {
    data() {
        return {
            courseGoal: 'alskdjf 1',
            href: 'https://v3.vuejs.org/guide/introduction.html'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber > .5) return 'Lear Vue!'
            else return 'Master Vue.'
        }
    }
}

Vue.createApp(app).mount('#user-goal')