const todoApp = {
    data() {
        return {
            todos: [],
            text: ''
        }
    },
    methods: {
        // 入力された文字列を一旦保存
        inputText(e) {
            this.text =e.target.value;
        },
        // 入力された文字列と一緒に識別idを配列に保存(保存した文字列は消す)
        addTodo() {
            if(!this.text) return;

            const text = this.text;
            // 乱数を発生させidとして使用
            const id = Math.ceil(Math.random() * 1000);
            const todo = {
                id,
                text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        // 入力した文字列を空に戻す
        resetText() {
            this.text = '';
        },
        // 配列に保存してあるtodoを消す(配列から削除)
        deleteTodo(id) {
            const index = this.getIndexBy(id);
            this.todos.splice(index, 1);
        },
        // 完了したtodoの方へ移動(isDoneをtrueに)
        toggleIsDone(id) {
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        // どのtodoか判別する(idによって)
        getIndexBy(id) {
            const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        }
    },
    computed: {
        // isDoneの真偽によって表示させる場所を変える
        doneTodo() {
            return this.todos.filter( todo => todo.isDone === true);
        },
        incompleteTodo(){
            return this.todos.filter( todo => todo.isDone === false);
        }
    }
};
Vue.createApp(todoApp).mount('#app');