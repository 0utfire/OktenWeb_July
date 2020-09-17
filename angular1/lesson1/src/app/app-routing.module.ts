import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTodosComponent} from './components/all-todos/all-todos.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {RemovoeTodoComponent} from './components/removoe-todo/removoe-todo.component';

const routes: Routes = [
  {path: 'alltodo', component: AllTodosComponent},
  {path: 'addtodo', component: AddTodoComponent},
  {path: 'removetodo', component: RemovoeTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
