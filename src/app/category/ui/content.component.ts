import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, Subject } from 'rxjs';
import { CategoriesModel } from 'src/app/category/infrastructure/models/categories';
import swal from 'sweetalert2';
import { DeleteCategory } from '../domain/use-cases/delete-categories.usecase';
import { getCategories } from '../domain/use-cases/read-categories.usecase';

declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Output() category: EventEmitter<CategoriesModel> = new EventEmitter<CategoriesModel>();
  subject: Subject<boolean> = new Subject<boolean>();
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
      next: (categories: CategoriesModel) => {
        this.categories.push(categories);
      }
    });
  }

  openModal() {
    ($('#createModal') as any).modal('show');
  }

  onDelete(id: number) {
    swal.fire({
      title: '¿Are you Sure?',
      text: 'your going to delete this record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this._delete.execute(id).subscribe({
          error: () => {
            swal.fire({
              icon: 'error',
              title: '¡Error!',
              text: 'please verify',
              customClass: {
                confirmButton: 'btn btn-primary'
              },
            });
          },
          next: () => {
            swal.fire({
              text: "Category Deleted!",
              icon: "success",
              title: "Success",
              buttonsStyling: false,
              confirmButtonText: "Ok",
              customClass: {
                confirmButton: "btn btn-primary"
              }
            })
          },
          complete: () => {
            this.loadData();
          }
        });
      }
    })
  }

  Update(category: CategoriesModel) {
    this.category.emit(category);
  }
  
}
