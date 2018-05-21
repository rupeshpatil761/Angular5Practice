import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoService{

    public todos:Array<Todo>=[new Todo(1,"Sleep"),new Todo(2,"Wakeup"),new Todo(3,"Office"),new Todo(4,"Sleep Again")];

    getTodoList(): Observable<Todo[]>{
        return Observable.of(this.todos).map(o => o);
    };

    public addNew(){
        this.todos.push(new Todo(5,"Test Add"));
    }

}