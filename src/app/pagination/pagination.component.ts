import {Component,OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../services/users.service';

@Component({

    selector:'pagination',
    templateUrl:'./pagination.component.html'

})
export class PaginationComponent implements OnInit{

   users: Array<User> = [];

   constructor(private userService:UserService){};

   ngOnInit(){
       this.users = this.userService.users;
   }
}

