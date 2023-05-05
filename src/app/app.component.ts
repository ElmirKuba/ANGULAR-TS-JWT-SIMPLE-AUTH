import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getAuthToRefreshToken();
  }
}
