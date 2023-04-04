import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './ui/login.component';
import { RegisterDialogComponent } from './ui/register-dialog/register-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUseCase, RegisterUseCase } from './domain/use-cases';
import { IAuthRepository } from './domain/repositories';
import { AuthRepository } from './infrastructure/repositories';
import { AuthDataSource, IAuthDatasource } from './infrastructure/datasources';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterDialogComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    LoginUseCase,
    RegisterUseCase,
    { provide: IAuthDatasource, useClass: AuthDataSource },
    { provide: IAuthRepository, useClass: AuthRepository },
  ]
})
export class LoginModule { }
