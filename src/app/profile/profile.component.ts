import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

import toastr from 'toastr';

interface IUser {
  password: string;
  roles: string[];
  username: string;
  __v: number;
  _id: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  allUsers: IUser[] = [];

  constructor(public profileService: ProfileService) {}

  getAllUsers() {
    this.profileService.getAllUsers<IUser[]>().subscribe({
      next: (data: IUser[]) => {
        const returnedHttp = JSON.parse(JSON.stringify(data));

        if (
          (returnedHttp.ok === false && returnedHttp.status === 400) ||
          returnedHttp.ok === false ||
          returnedHttp.status === 400
        ) {
          toastr.error(
            `Запрос пользователей прошел неудачно!\n\n${returnedHttp.error.message}`,
            'Запрос пользователей'
          );
        } else {
          this.allUsers = data;
        }
      },
    });
  }
}
