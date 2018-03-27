import { Component,OnInit} from "@angular/core";
import {User} from '../models/user.model';
import {UserService} from '../services/users.service';
declare const $;

@Component({
    selector:'datatable',
    templateUrl:'./datatable.component.html'
})
export class DatatableComponent implements OnInit{

    users: Array<User> = [];
 
    constructor(private userService:UserService){};
 
    ngOnInit(){
        this.users = this.userService.users;
        $(function () {
           $('#example').DataTable( {
                dom: 'Bfrtip',
                buttons: [
                    'csv', 'excel', 'pdf', 'print'
                ]
            });
        });
    }

}