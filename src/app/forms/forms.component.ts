import {Component,OnInit} from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { forbiddenNameValidator } from '../services/forbidden-name.directive';

@Component({
    selector : 'forms',
    templateUrl:'forms.component.html'

})
export class FormsComponent implements OnInit{
    langs: string[] = [
        'English',
        'French',
        'German',
    ]
    myform: FormGroup;
    name: FormControl; 
    email: FormControl;
    password: FormControl;
    language: FormControl;
    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() { 
        this.name = new FormControl('', [Validators.required,Validators.minLength(4),forbiddenNameValidator(/bob/i)]);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.language = new FormControl('', Validators.required);
    }

    createForm() { 
        this.myform = new FormGroup({
            name: this.name,
            email: this.email,
            password: this.password,
            language: this.language
        });
    }
    onSubmit(){
        if (this.myform.valid) {
            console.log("Form Submitted!");
        }else{
            //this.validateAllFormFields(this.myform); 
        }
        //this.myform.reset();
    }

    validateAllFormFields(formGroup: FormGroup) {        
        Object.keys(formGroup.controls).forEach(field => {  
            const control = formGroup.get(field);            
            if (control instanceof FormControl) {
            //control.markAsTouched({ onlySelf: true });
              control.markAsTouched();
            } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control); 
            }
        });
    }
}