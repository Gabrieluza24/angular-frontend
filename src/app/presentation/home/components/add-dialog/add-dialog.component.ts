import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CreateCategory } from 'src/app/core/usecases/create-categories.usecase';

declare var $: any;

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  @Input() subject!: Subject<boolean>;
  public categoryForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _categories: CreateCategory,) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.minLength(50),Validators.maxLength(100)]],
      idParentCategory: [''],
    })
  }

  hideModal() {
    ($('#createModal') as any).modal('hide');
    this.categoryForm.reset();
  }

  onSubmit() {
    const form = this.categoryForm.value;
    this._categories.execute(form).subscribe({
      complete:() => {
        this.subject.next(true);
      }
    });
  }
}
