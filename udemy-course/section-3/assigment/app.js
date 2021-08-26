const app = Vue.createApp({
    data() {
        return {
            todos: [],
            inputText: '',
            toggle: true
        }
    },
    methods: {
        addTodo() {
            this.todos.push(this.inputText);
            this.inputText = ''
        },
        clickToggel() {
            this.toggle = !this.toggle;
        }
    },
    computed: {
        buttonText() {
            if (this.toggle) return 'Hide';
            else return 'Shown List';
        }
    }
})

app.mount('#assignment')