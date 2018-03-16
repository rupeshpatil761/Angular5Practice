import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/users.service';

@Component({
    selector:"params",
    templateUrl:"./params.component.html"
})
export class ParamsComponent{

    constructor(private router:Router,private userService : UserService){}

    userId : number;

    showUserDetails(){
        this.userService.paramType = true;
        //alert(this.userId);

        //this.router.navigate(['user/'+this.userId]);

        this.router.navigate(['user',{id:this.userId}]);

    }

    showUserDetailsNew(){
        //alert(this.userId);
        this.userService.paramType = false;
        this.router.navigate(['user'],{queryParams:{id:this.userId,type:'query-params'}});        
    }

}