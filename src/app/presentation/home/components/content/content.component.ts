import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from 'src/app/core/domain/categories';
import { DeleteCategory } from 'src/app/core/usecases/delete-categories.usecase';
import { getCategories } from 'src/app/core/usecases/read-categories.usecase';

declare var $ :any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public categories: CategoriesModel[] = [];

  constructor(
    private _categories: getCategories,
    private _delete: DeleteCategory,
  ) {
  }

  ngOnInit(): void {
    this._categories.execute().subscribe({
      next: (categories) => {
        this.categories.push(categories) ;
      }
    });
  }

  openModal(){
    ($('#createModal') as any).modal('show');
  }

  onDelete(id:number){
    this._delete.execute(id).subscribe(console.log);
  }

}
