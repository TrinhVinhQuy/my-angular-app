import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-add-todo',
    standalone: true,
    imports: [],
    templateUrl: './add-todo.component.html',
    styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
    constructor(private todoService: TodoService) {}

    addTodo(title: string) {
        if (title.trim()) {
            this.todoService.addTodo(title);
        }
    }
}
