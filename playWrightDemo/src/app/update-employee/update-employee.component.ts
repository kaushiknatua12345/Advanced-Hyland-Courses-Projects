import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,RouterLink,CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {


 
  updateForm: FormGroup | any;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            Name: ['', Validators.required],            
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
      }

        // convenience getter for easy access to form fields
    get f () { return this.updateForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.updateForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.updateForm.value, null, 4));
    }



}
