import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ContentComponent } from './ui/content.component';
import { AddDialogComponent } from './ui/components/add-dialog/add-dialog.component';
import { UpdateDialogComponent } from './ui/components/update-dialog/update-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCategory } from './domain/use-cases/create-categories.usecase';
import { DeleteCategory } from './domain/use-cases/delete-categories.usecase';
import { UpdateCategory } from './domain/use-cases/update-categories.usecase';
import { getCategories } from './domain/use-cases/read-categories.usecase';
import { categoriesRepository } from './infrastructure/repositories/categories.repository';
import { ICategoriesRepository } from './domain/repositories/categories.repository';


@NgModule({
  declarations: [
    ContentComponent,
    AddDialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    CreateCategory,
    DeleteCategory,
    UpdateCategory,
    getCategories,
    { provide: ICategoriesRepository, useClass: categoriesRepository },
  ]
})
export class CategoryModule { }
