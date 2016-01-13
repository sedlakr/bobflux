import * as f from './flux';
import * as s from './states';

export let todosSection: f.ICursor<s.ITodosState> = {
    key: 'todoSection'
}

export let todosIndexFactory: f.ICursorFactory<s.ITodo, number> = {
    create: (index) => {
        return { key: `todoSection.todos.${index}` };
    }    
}

export let todos: f.ICursor<s.ITodo[]> = {
    key: 'todoSection.todos'
}

export let editedTodo: f.ICursor<s.ITodo> = {
    key: 'todoSection.editedTodo'
}

export let editedTodoName: f.ICursor<string> = {
    key: 'todoSection.editedTodo.name'
}
