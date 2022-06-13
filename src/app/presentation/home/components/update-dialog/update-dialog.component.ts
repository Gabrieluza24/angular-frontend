import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CategoriesModel } from 'src/app/core/domain/categories';
import { UpdateCategory } from 'src/app/core/usecases/update-categories.usecase';
import swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})

export class UpdateDialogComponent implements OnInit {
  @Input() category!: CategoriesModel;
  @Input() subject!: Subject<boolean>;
  public categoryForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _updateCategories: UpdateCategory,
    ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      code: [this.category.code ?? '', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
      title: [this.category.title ?? '', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
      description: [this.category.description ?? '', [Validators.required, Validators.minLength(50),Validators.maxLength(100)]],
      idParentCategory: [this.category.idParentCategory ?? ''],
    })
  }

  hideModal() {
    ($('#updateModal') as any).modal('hide');
  }

  onSubmit() {
    const form = this.categoryForm.value;
    const body = {...form, id: this.category.id}

       this._updateCategories.execute(body).subscribe({
        error: () => {
          swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please verify and try again!',
            customClass: {
              confirmButton: 'btn btn-primary'
            }
          })
        },
        next: () => {
          this.hideModal();
          swal.fire({
            text: "Category Updated!",
            title: 'Success!',
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            customClass: {
              confirmButton: "btn btn-primary"
            }
          })
        },
        complete:() => {
          this.subject.next(true);
        }
      });
  }
}
