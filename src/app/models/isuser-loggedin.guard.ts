import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
    providedIn: 'root',
  })
  export class IsUserLoggedInGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree> {
      return this.auth.getLoggedInUser() != null;
    }
  }
  