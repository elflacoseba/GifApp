import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    CardListComponent
  ]
})
export class GifsModule { }
