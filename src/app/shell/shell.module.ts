import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './ui/home.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { FooterComponent } from './ui/components/footer/footer.component';
import { LogoutUseCase } from '../login/domain/use-cases';
import { Routing } from '../routing';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: Routing,
  },
];


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    LogoutUseCase
  ]
})
export class ShellModule { }
