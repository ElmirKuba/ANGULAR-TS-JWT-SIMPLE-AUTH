import { Component } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-left-sidebar-content',
  templateUrl: './left-sidebar-content.component.html',
  styleUrls: ['./left-sidebar-content.component.scss'],
})
export class LeftSidebarContentComponent {
  constructor(public profileService: ProfileService) {}
}
