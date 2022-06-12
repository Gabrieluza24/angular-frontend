import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUseCase } from 'src/app/core/usecases/login.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private Login: LoginUseCase
  ) {}
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    //Casos de Error
    const LoginCredentials = this.loginForm.value;

    this.Login.execute(LoginCredentials).subscribe(console.log);
  }

}
