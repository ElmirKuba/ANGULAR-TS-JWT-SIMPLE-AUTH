import { Injectable } from '@angular/core';
import { IAuthData, IAuthType } from './auth.interfaces';
import { HttpClient } from '@angular/common/http';
import environment from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authUser<T1>(authType: IAuthType, authData: IAuthData): Observable<T1> {
    if (authType === 'register') {
      return this.http
        .post<T1>(`${environment.BASE_URL}/auth/register`, authData, {
          withCredentials: true,
        })
        .pipe(map((data: T1) => data));
    }

    return this.http
      .post<T1>(`${environment.BASE_URL}/auth/login`, authData, {
        withCredentials: true,
      })
      .pipe(map((data: T1) => data));
  }
}
