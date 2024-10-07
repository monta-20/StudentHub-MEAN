import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root',
})
export class GuardadminGuard implements CanActivate {
  constructor(private authService: AuthadminService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const loggedIn = this.authService.LoggedIn();

    if (loggedIn) {
      return of(true); // User is logged in
    } else {
      this.router.navigate(['/admin/login'], {
        queryParams: { returnurl: state.url },
      });
      return of(false); // User is not logged in
    }
  }
}
