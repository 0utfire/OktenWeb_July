import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { RemovoeTodoComponent } from './components/removoe-todo/removoe-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTodosComponent,
    AddTodoComponent,
    RemovoeTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
