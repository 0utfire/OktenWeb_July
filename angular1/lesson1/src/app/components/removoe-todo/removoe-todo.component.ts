import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-removoe-todo',
  templateUrl: './removoe-todo.component.html',
  styleUrls: ['./removoe-todo.component.css']
})
export class RemovoeTodoComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }
  todolist = this.todoListService.todolist
  removeTodo(todo) {this.todoListService.removeTodo(todo)}

  ngOnInit(): void {
  }

}
