import { Component } from '@angular/core';


@Component({
  selector: 'app-resultsearch',
  templateUrl: './resultsearch.component.html',
  styleUrls: ['./resultsearch.component.css'],
})


export class ResultSearchComponent {
// Variables para controlar la visibilidad de las listas
showPrecio = false;
showToferta = false;
showInmueble = false;
showRecamaras = false;

// Función para mostrar/ocultar la lista de Precio
togglePrecio() {
  this.showPrecio = !this.showPrecio;
  // Oculta las otras listas
  this.showToferta = false;
  this.showInmueble = false;
  this.showRecamaras = false;
}

// Función para mostrar/ocultar la lista de Tipo de Oferta
toggleToferta() {
  this.showToferta = !this.showToferta;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showInmueble = false;
  this.showRecamaras = false;
}

// Función para mostrar/ocultar la lista de Inmueble
toggleInmueble() {
  this.showInmueble = !this.showInmueble;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showRecamaras = false;
}

// Función para mostrar/ocultar la lista de Recamaras
toggleRecamaras() {
  this.showRecamaras = !this.showRecamaras;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showInmueble = false;
}


}
