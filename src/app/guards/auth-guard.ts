import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot,} from '@angular/router';

@Injectable ()
export class AuthGuard implements CanActivate {
  constructor (private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem("TOKEN")) {
      // si tenemos token, dejamos pasar
      return true;
    } else {
      // si el usuario no está autorizado, lo llevamos a la página de login
      // tenemos que enviar también el estado de la URL, para que no se pierdan los parámetros
      return this._router.createUrlTree(['/login'],
        {queryParams: {returnUrl: state.url}}
      )
    }
    
  }
}