let app = new Vue({
	el: '#app',
	data: {
		todos: [
			{
				title: 'یادگیری Vue.js',
				edit: false,
				complete: false
			},
			{
				title: 'یادگیری Django',
				edit: false,
				complete: true
			},
			{
				title: 'یادگیری ReactJs',
				edit: true,
				complete: false
			},
		],
		newTodo: '',
	},
	methods: {
		addTodo() {
			if (this.newTodo) {
				this.todos.push({
					title: this.newTodo,
					edit: false,
					complete: false
				})
				this.newTodo = ''
			}
		},
		delTodo(index) {
			this.todos.splice(index, 1)
		},
		editTodo(index) {
			for (var i = this.todos.length - 1; i >= 0; i--) {
				this.todos[i].edit = false
			}
			this.todos[index].edit = !this.todos[index].edit
		},
		updateTodo(title, index) {
			this.todos[index].title = title
			this.todos[index].edit = false
		},
		completeToggle(index) {
			this.todos[index].complete = !this.todos[index].complete
		}
	}

})
