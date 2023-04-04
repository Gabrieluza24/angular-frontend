import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CategoriesModel } from 'src/app/category/infrastructure/models/categories';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subject = new Subject<boolean>();
  public category: CategoriesModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  updateCategory(event:CategoriesModel){
    this.category = event;
    ($('#updateModal') as any).modal('show');
  }

}
