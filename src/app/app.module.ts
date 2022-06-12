import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';

import { authRepository } from './core/repositories/auth.repository';
import { authLoginRepository } from './data/repository/auth.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    CoreModule,
    PresentationModule
  ],
  providers: [
    {provide: authRepository, useClass: authLoginRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
