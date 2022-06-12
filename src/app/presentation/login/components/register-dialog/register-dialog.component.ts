import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8), Validators.pattern(/^[A-z0-9*/+\-$%&]*$/)]]
    })
  }

  hideModal() {
    ($('#signupModal') as any).modal('hide');
    this.registerForm.reset();
  }

  onSubmit() {
    if(this.registerForm.invalid) return;
    const form = this.registerForm.value;
    
    console.log(form);
  }

}
