import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Title} from './components/title/title';
import {PreCard} from './components/pre-card/pre-card';
import {SmallCard} from './components/small-card/small-card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Title,
    PreCard,
    SmallCard
  ],
  exports:[Title,PreCard,SmallCard]
})
export class HomeModule { }
