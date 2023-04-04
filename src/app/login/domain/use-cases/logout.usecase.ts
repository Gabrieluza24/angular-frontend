import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { UseCase } from "src/app/core/base";


@Injectable()
export class LogoutUseCase implements UseCase<void, boolean> {

    constructor(private router: Router) { }

    execute(): Observable<boolean> {
        if (sessionStorage.getItem('user')) {
            sessionStorage.removeItem('user');
            this.router.navigate(['auth']);
            return of(true);
        }
        return of(false);
    }
}
