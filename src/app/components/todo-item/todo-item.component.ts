import { Component, Input } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
    @Input() todo!: Todo;

    constructor(private todoService: TodoService) {}

    toggleCompletion() {
        this.todoService.toggleTodoCompletion(this.todo.id);
    }

    deleteTodo() {
        this.todoService.deleteTodo(this.todo.id);
    }
}
