import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LeftHeaderComponent } from './left-header/left-header.component';
import { LeftSidebarContentComponent } from './left-sidebar-content/left-sidebar-content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './intercepters/http-headers.interceptor';
import { AuthInterceptor } from './intercepters/auth.interceptor';
import { profileGuard } from './profile/profile.guard';
import { ProfileModule } from './profile/profile.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    LeftHeaderComponent,
    LeftSidebarContentComponent,
    ContentHeaderComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    ProfileModule,
    MainModule,
  ],
  providers: [
    profileGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
