import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'todo-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
  providers:[TodoService]
})
export class ObservableComponent implements OnInit {

  constructor(private todoStore:TodoService) { }

  todos:Observable<Todo[]>= new Observable();


  ngOnInit() {
    this.todos = this.todoStore.getTodoList();
  }

  addExtraTodo(){
    this.todoStore.addNew();
  }

  //ng g c observable --module app

}
