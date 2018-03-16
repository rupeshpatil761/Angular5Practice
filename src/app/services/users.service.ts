import {User} from '../models/user.model';

export class UserService{

  users: Array<User> = [];

  paramType  = true;

  constructor(){
        this.users.push(new User(1,"A","d"));
        this.users.push(new User(2,"B","j"));
        this.users.push(new User(3,"C","u"));
        this.users.push(new User(4,"D","h"));
        this.users.push(new User(5,"E","r"));
        this.users.push(new User(6,"F","d"));
        this.users.push(new User(7,"G","h"));
        this.users.push(new User(8,"H","b"));
        this.users.push(new User(9,"I","x"));
        this.users.push(new User(10,"J","z"));
        this.users.push(new User(11,"C","a"));
        this.users.push(new User(12,"D","Y"));
        this.users.push(new User(13,"E","K"));
        this.users.push(new User(14,"F","I"));
        this.users.push(new User(15,"G","N"));
        this.users.push(new User(16,"H","L"));
        this.users.push(new User(17,"I","A"));
        this.users.push(new User(18,"J","B"));
        this.users.push(new User(19,"C","H"));
        this.users.push(new User(20,"D","Y"));
        this.users.push(new User(21,"E","K"));
        this.users.push(new User(22,"F","I"));
        this.users.push(new User(23,"G","d"));
        this.users.push(new User(24,"H","L"));
        this.users.push(new User(25,"I","a"));
     }

  findUser(id:number){
    //alert(id);
    if((id-1) > this.users.length){
      return new User(0,'No Found','Plz try different');
    }else{
      return this.users[id-1];
    }
  }

}