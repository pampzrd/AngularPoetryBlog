import { Component } from '@angular/core';
import {HomeModule} from './home-module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [HomeModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

   poetryObject = [
    { id: 1, imagem: "https://images.pexels.com/photos/26755307/pexels-photo-26755307.jpeg", titulo: "Estudar JavaScript", descricao: "descr1", texto:"text1" },
    { id: 2, imagem: "https://images.pexels.com/photos/29070905/pexels-photo-29070905.jpeg", titulo: "Fazer lista de compras", descricao: "descr2", texto:"text2" },
    { id: 3, imagem: "https://images.pexels.com/photos/11420868/pexels-photo-11420868.jpeg", titulo: "Assistir tutorial", descricao: "descr3", texto:"text3" },
    //{ id: 4, imagem: "", titulo: "Assistir tutorial", descricao: "", texto:"" }
  ];


  imagem=['https://images.pexels.com/photos/26755307/pexels-photo-26755307.jpeg','https://images.pexels.com/photos/29070905/pexels-photo-29070905.jpeg','https://images.pexels.com/photos/11420868/pexels-photo-11420868.jpeg','https://images.pexels.com/photos/2014694/pexels-photo-2014694.jpeg','https://images.pexels.com/photos/10080413/pexels-photo-10080413.jpeg','https://images.pexels.com/photos/7935225/pexels-photo-7935225.jpeg','https://images.pexels.com/photos/31154312/pexels-photo-31154312.jpeg','https://images.pexels.com/photos/17249850/pexels-photo-17249850.jpeg','https://images.pexels.com/photos/10420372/pexels-photo-10420372.jpeg','https://images.pexels.com/photos/20184610/pexels-photo-20184610.jpeg','https://images.pexels.com/photos/32979521/pexels-photo-32979521.jpeg','https://images.pexels.com/photos/14770964/pexels-photo-14770964.jpeg'];

  titulo=["a","b","c",];
  descricao=["aaaaaa","bbbbb","ccccc"];

}
