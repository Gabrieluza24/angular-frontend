import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from 'src/app/core/domain/categories';
import { getCategories } from 'src/app/core/usecases/read-categories.usecase';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public categories: CategoriesModel[] = [];

  constructor(
    private _categories: getCategories,
  ) {
  }

  ngOnInit(): void {
    this._categories.execute().subscribe({
      next: (categories) => {
        this.categories.push(categories) ;
      }
    })
  }

}
