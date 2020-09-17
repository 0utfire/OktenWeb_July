import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todolist = [];
  constructor() { }
  addNewTodo(newTodo: string) {
    if (newTodo) {
      this.todolist.push(newTodo)
      console.log(newTodo);
    }
  }
  removeTodo (todo: string){
    this.todolist.splice(this.todolist.indexOf(todo), 1);
  }
}
