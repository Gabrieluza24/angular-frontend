import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationModule } from './presentation/presentation.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => PresentationModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
