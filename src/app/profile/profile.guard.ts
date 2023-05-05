import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class profileGuard implements CanActivate {
  constructor(private cookieService: CookieService) {}

  canActivate(): boolean {
    if (this.cookieService.get('accessToken') === '') return false;
    return true;
  }
}
