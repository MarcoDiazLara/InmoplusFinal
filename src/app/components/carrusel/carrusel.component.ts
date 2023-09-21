import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit{


  images = [
    { src: 'imagen1.jpg', alt: 'Imagen 1' },
    { src: 'imagen2.jpg', alt: 'Imagen 2' }
  ];

  currentIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1000); // Cambia de imagen cada 3 segundos
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
 
}

 

  

  
   
  













