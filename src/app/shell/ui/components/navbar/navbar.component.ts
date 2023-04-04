import { Component, OnInit } from '@angular/core';
import { LogoutUseCase } from 'src/app/login/domain/use-cases';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userEmail: string;

  constructor(
    private _logout: LogoutUseCase
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
