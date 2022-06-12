import { Component, Input, OnInit } from '@angular/core';
import { filter, Subject } from 'rxjs';
import { CategoriesModel } from 'src/app/core/domain/categories';
import { DeleteCategory } from 'src/app/core/usecases/delete-categories.usecase';
import { getCategories } from 'src/app/core/usecases/read-categories.usecase';

declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() subject!: Subject<boolean>;
  public categories: CategoriesModel[] = [];

  constructor(
    private _categories: getCategories,
    private _delete: DeleteCategory,
  ) {
  }

  ngOnInit(): void {
    this.loadData();

    this.subject.pipe(filter(s => s)).subscribe({
      next: () => {
        this.loadData();
      }
    })
  }

  loadData() {
    this.categories = [];

    this._categories.execute().subscribe({
      next: (categories) => {
        this.categories.push(categories);
      }
    });
  }

  openModal() {
    ($('#createModal') as any).modal('show');
  }

  onDelete(id: number) {
    this._delete.execute(id).subscribe({
      complete: () => {
        this.loadData();
      }
    });
  }

}
