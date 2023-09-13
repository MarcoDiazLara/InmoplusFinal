import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  imgCollection: Array<object> = [
    {
       
      image: 'assets/6.jpg',
      thumbImage: 'assets/6.jpg',
      alt: 'Image 1',
      
    }, {
      image: 'assets/8.jpg',
      thumbImage: 'assets/8.jpg',
      
      alt: 'Image 2'
    },
  ];


















}
