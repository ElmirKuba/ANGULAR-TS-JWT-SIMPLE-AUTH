import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LeftHeaderComponent } from './left-header/left-header.component';
import { LeftSidebarContentComponent } from './left-sidebar-content/left-sidebar-content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [AppComponent, LeftHeaderComponent, LeftSidebarContentComponent, ContentHeaderComponent, MainContentComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
