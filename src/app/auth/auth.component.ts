import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import toastr from 'toastr';

import { AuthService } from './auth.service';

import { IAuthType } from './auth.interfaces';
import { IAuthReturn } from './auth.interfaces';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  authType!: IAuthType;
  subsAuthAccount: Subscription = null as unknown as Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private cookieService: CookieService
  ) {}

  authForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
  });

  authSubmit() {
    this.subsAuthAccount = this.authService
      .authUser<IAuthReturn>(this.authType, this.authForm.value)
      .subscribe({
        next: (data: IAuthReturn) => {
          if (
            (data.ok === false && data.status === 400) ||
            data.ok === false ||
            data.status === 400
          ) {
            toastr.error(
              `Авторизация пользователя ${this.authForm.value.username} прошла неудачно!\n\n${data.error.message}`,
              'Авторизация'
            );

            this.cookieService.delete('accessToken');

            this.profileService.setAuthData(
              null as unknown as IAuthReturn,
              false
            );
          } else {
            toastr.success(
              `Авторизация пользователя ${data.user.username} прошла успешно!`,
              'Авторизация'
            );

            this.cookieService.set('accessToken', data.tokens.accessToken);

            this.profileService.setAuthData(data, true);

            this.router.navigate(['/profile']);
          }
        },
        complete: () => {},
      });
  }
}
