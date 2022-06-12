import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { ContentComponent } from './home/components/content/content.component';
import { AddDialogComponent } from './home/components/add-dialog/add-dialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    AddDialogComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    DataModule,
    PresentationRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PresentationModule { }
