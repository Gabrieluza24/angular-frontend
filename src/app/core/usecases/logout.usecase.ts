import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class Logout {

    constructor(private router: Router) { }

    execute(params: void): boolean {
        if (sessionStorage.getItem('user')) {
            sessionStorage.removeItem('user');
            this.router.navigate(['']);
            return true;
        }
        return false;
    }
}