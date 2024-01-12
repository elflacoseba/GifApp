import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    CardListComponent,
    GifsCardComponent
  ]
})
export class GifsModule { }
