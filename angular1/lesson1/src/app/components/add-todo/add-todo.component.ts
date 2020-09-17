import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(private todoListService: TodoListService) {
  }
  addNewTodo(addOneTodo) {this.todoListService.addNewTodo(addOneTodo)
  }
  ngOnInit(): void {
  }
}
