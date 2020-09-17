import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  constructor( private todoListService: TodoListService) {
  }
  todolist = this.todoListService.todolist

  ngOnInit(): void {
  }

}
