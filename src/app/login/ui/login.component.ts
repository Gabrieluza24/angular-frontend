import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUseCase } from 'src/app/login/domain/use-cases/login.usecase';
import swal from 'sweetalert2';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private login: LoginUseCase,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user'))
    {
      this.router.navigate([''])
    }
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8), Validators.pattern(/^[A-z0-9*/+\-$%&]*$/)]]
    });
  }

  openModal() {
    ($('#signupModal') as any).modal('show');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      swal.fire({
        icon: 'error',
        title: '¡Login Error!',
        customClass: {
          confirmButton: 'btn btn-primary'
        }
      })
      return;
    }

    const LoginCredentials = this.loginForm.value;
    this.login.execute(LoginCredentials).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        swal.fire({
          icon: 'error',
          title: '¡Login Error!',
          customClass: {
            confirmButton: 'btn btn-primary'
          }
        })
      }
    });
  }

}
