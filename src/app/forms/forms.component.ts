import {Component,OnInit} from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
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
    firstName: FormControl; 
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() { 
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
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
            name: new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
    }
    onSubmit(){
        if (this.myform.valid) {
            console.log("Form Submitted!");
        }else{
            this.validateAllFormFields(this.myform); 
        }
        //this.myform.reset();
    }

    validateAllFormFields(formGroup: FormGroup) {         //{1}
        Object.keys(formGroup.controls).forEach(field => {  //{2}
            const control = formGroup.get(field);             //{3}
            if (control instanceof FormControl) {             //{4}
            //control.markAsTouched({ onlySelf: true });
              control.markAsTouched();
            } else if (control instanceof FormGroup) {        //{5}
            this.validateAllFormFields(control);            //{6}
            }
        });
    }
}