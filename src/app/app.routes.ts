import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoCheckComponent } from './components/todo-check/todo-check.component';

export const routes: Routes = [
    { path: 'todos', component: TodoListComponent },
    { path: 'add', component: AddTodoComponent },
    { path: 'check', component: TodoCheckComponent },
];
