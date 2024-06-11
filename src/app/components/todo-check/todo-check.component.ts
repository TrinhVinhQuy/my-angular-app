import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-check',
    standalone: true,
    imports: [AddTodoComponent, TodoItemComponent, CommonModule],
    templateUrl: './todo-check.component.html',
    styleUrl: './todo-check.component.scss',
})
export class TodoCheckComponent implements OnInit {
    todos: Todo[] = [];
    private todoSubscription: Subscription | undefined;

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todoSubscription = this.todoService.todos$.subscribe((updatedTodos) => {
            this.todos = updatedTodos;
        });
    }

    deleteTodo(id: number): void {
        this.todoService.deleteTodo(id);
    }
}
