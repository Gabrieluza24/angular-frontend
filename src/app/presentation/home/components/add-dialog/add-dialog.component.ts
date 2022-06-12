import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesModel } from 'src/app/core/domain/categories';

declare var $: any;

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  public categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      code: [],
      title: [],
      description: [],
      idParentCategory: [],
    })
  }

  hideModal() {
    ($('#createModal') as any).modal('hide');
    this.categoryForm.reset();
  }

  onSubmit() {
    
    console.log(this.categoryForm.value)
  }
}
