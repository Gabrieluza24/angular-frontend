import { Component, OnInit } from '@angular/core';
import { Logout } from 'src/app/core/usecases/logout.usecase';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userEmail: string;

  constructor(
    private _logout: Logout
  ) {
    this.userEmail = ''
  }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('user') ?? '';
  }

  logout(){
    this._logout.execute();
  }
}
