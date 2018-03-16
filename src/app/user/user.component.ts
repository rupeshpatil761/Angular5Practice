import { Component,OnInit} from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { UserService } from "../services/users.service";
import { User } from "../models/user.model";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";



@Component({
    selector:"user",
    templateUrl:"./user.component.html"
})
export class UserComponent implements OnInit,OnDestroy{

    user : User;// = new User(12,'Rupesh','Jalgaon');

    queryParamReadingSubscription : Subscription ;

    constructor(private activatedRoute : ActivatedRoute,private userService : UserService,private route : Router){}

    ngOnInit(){

        if(this.userService.paramType){
            //this.user = this.userService.findUser(this.activatedRoute.snapshot.params['id'] || undefined);
            this.queryParamReadingSubscription = this.activatedRoute.params.subscribe(params=>{
                this.user = this.userService.findUser(params['id']);
            });

        }else{

            //Reading as Snapshot

            //this.user = this.userService.findUser(this.activatedRoute.snapshot.queryParams['id']);

            //Reading as Observable

           this.queryParamReadingSubscription = this.activatedRoute.queryParams.subscribe(params=>{
                this.user = this.userService.findUser(params['id']);
            });
        }
    }
   
    goBack(){
        this.route.navigate(['params']);
    }

    ngOnDestroy(){
        if(this.queryParamReadingSubscription!=undefined){
            this.queryParamReadingSubscription.unsubscribe();
        }
    }
    
}