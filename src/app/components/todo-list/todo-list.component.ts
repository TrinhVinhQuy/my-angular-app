import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [AddTodoComponent, TodoItemComponent, CommonModule],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
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
