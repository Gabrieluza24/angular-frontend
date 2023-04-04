import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./shell/shell.module').then((m) => m.ShellModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', redirectTo: '',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
