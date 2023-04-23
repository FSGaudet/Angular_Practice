import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
/*
 From what I understand, this is a generic template that you can use to guard a 
 page from being seen until some prerequisit are fullfilled. 
 The guard is a service and then can be reused on any set of page.
 Its an injectable, or a "service"
*/
@Injectable({
  providedIn: 'root'
})
export class GoodDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Here to get the parameter ID that come in the get
      const id = Number(route.paramMap.get('id'));

      // If ID is lower than 1 or is not a valid number, give an alert
      if (isNaN(id) || id < 1){
        alert('Invalid good id');
        this.router.navigate(['/goods']);
        return false;
      }
    return true;
  }
  
}
