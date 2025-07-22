import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Title} from './components/title/title';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Title
  ],
  exports:[Title]
})
export class HomeModule { }
