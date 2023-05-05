import { Injectable } from '@angular/core';
import { IAuthReturn } from '../auth/auth.interfaces';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import environment from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private authData: IAuthReturn = null as unknown as IAuthReturn;
  private isLoggedIn: boolean = false;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {}

  getAuthToRefreshToken() {
    if (this.cookieService.get('accessToken') !== '') {
      this.http
        .get<IAuthReturn>(`${environment.BASE_URL}/auth/refresh-tokens`, {
          withCredentials: true,
        })
        .subscribe({
          next: (data: IAuthReturn) => {
            this.setAuthData(data, true);
          },
          complete: () => {},
          error: (err: any) => {},
        });
    }
  }

  userSignOut() {
    this.cookieService.delete('accessToken');

    this.setAuthData(null as unknown as IAuthReturn, false);

    this.router.navigate(['auth']);
  }

  setAuthData(data: IAuthReturn, loggedState: boolean) {
    this.authData = data;
    this.isLoggedIn = loggedState;
  }

  public get getAuthData(): IAuthReturn {
    return this.authData;
  }

  public get getLoggedIn() {
    return this.isLoggedIn;
  }
}
