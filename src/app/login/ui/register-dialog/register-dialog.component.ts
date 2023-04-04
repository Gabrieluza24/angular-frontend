import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { RegisterUseCase } from '../../domain/use-cases';

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
    private _register: RegisterUseCase,
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
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) return;
    const form = this.registerForm.value;

    this._register.execute(form).subscribe({
      error: () => {
        swal.fire({
          icon: 'error',
          title: 'Sign Up Error!',
          text: 'Please verify and try again!',
          customClass: {
            confirmButton: 'btn btn-primary'
          }
        })
      },
      next: () => {
        this.hideModal();
        swal.fire({
          text: "Sign Up Complete!",
          title: 'Success!',
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "btn btn-primary"
          }
        })
      }
    })

  }

}
