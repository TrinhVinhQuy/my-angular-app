import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private todos: Todo[] = [];
    private nextId = 1;

    private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
    todos$ = this.todosSubject.asObservable();

    constructor() {}

    getTodos(): Todo[] {
        return this.todos;
    }

    addTodo(title: string): void {
        const newTodo: Todo = {
            id: this.nextId,
            title: title,
            completed: false,
        };
        this.todos.push(newTodo);
        this.nextId++;
        console.log(this.todos);
    }

    toggleTodoCompletion(id: number): void {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    deleteTodo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.todosSubject.next(this.todos);
    }
}
