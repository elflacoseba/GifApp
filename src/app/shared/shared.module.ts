import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RightbarComponent } from './components/rightbar/rightbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    RightbarComponent,
    PageHeaderComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    RightbarComponent,
    PageHeaderComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
