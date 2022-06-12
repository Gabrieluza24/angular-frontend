import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './presentation/login/login.module';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { authRepository } from './core/repositories/auth.repository';
import { authLoginRepository } from './data/repository/auth.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DataModule,
    CoreModule,
  ],
  providers: [
    {provide: authRepository, useClass: authLoginRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
