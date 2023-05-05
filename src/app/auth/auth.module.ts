import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [AuthComponent],
  declarations: [AuthComponent],
  providers: [AuthService],
})
export class AuthModule {}
