import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { IAuthReturn } from '../auth/auth.interfaces';
import environment from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refresh: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tempRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.cookieService.get('accessToken')}`,
      },
    });

    return next.handle(tempRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !this.refresh) {
          this.refresh = true;

          return this.http
            .get<IAuthReturn>(`${environment.BASE_URL}/auth/refresh-tokens`, {
              withCredentials: true,
            })
            .pipe(
              switchMap((response: IAuthReturn) => {
                const tempRequest2 = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${this.cookieService.get(
                      'accessToken'
                    )}`,
                  },
                });

                return next.handle(tempRequest2);
              })
            );
        }

        this.refresh = false;

        return throwError(() => error);
      })
    );
  }
}
