import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-resultsearch',
  templateUrl: './resultsearch.component.html',
  styleUrls: ['./resultsearch.component.css'],
})


export class ResultSearchComponent {
// Variables para controlar la visibilidad de las listas
public showPrecio: boolean = false;
public showToferta: boolean = false;
public showInmueble: boolean = false;
public showRecamaras: boolean = false;
public showSearch: boolean = false;


constructor(private el: ElementRef, private router:Router) {}

@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Verifica si el clic no fue dentro del botón de Precio ni dentro de la lista de Precio
    if (!this.el.nativeElement.querySelector('.navbar').contains(event.target) &&
        !this.el.nativeElement.querySelector('.dropdown-precio, .dropdown-Toferta, .dropdown-inmueble, .dropdown-Recamaras, .dropdown-search' ).contains(event.target)) {
      // Si se hizo clic fuera del botón y fuera de la lista de Precio, oculta la lista
      this.showPrecio = false;
      this.showToferta = false;
      this.showInmueble = false;
      this.showRecamaras = false;
      this.showSearch = false;
    }
  }

// Función para mostrar/ocultar la lista de Precio
togglePrecio() {
  this.showPrecio = !this.showPrecio;
  // Oculta las otras listas
  this.showToferta = false;
  this.showInmueble = false;
  this.showRecamaras = false;
  this.showSearch = false;
}

// Función para mostrar/ocultar la lista de Tipo de Oferta
toggleToferta() {
  this.showToferta = !this.showToferta;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showInmueble = false;
  this.showRecamaras = false;
  this.showSearch = false;
}

// Función para mostrar/ocultar la lista de Inmueble
toggleInmueble() {
  this.showInmueble = !this.showInmueble;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showRecamaras = false;
  this.showSearch = false;
}

// Función para mostrar/ocultar la lista de Recamaras
toggleRecamaras() {
  this.showRecamaras = !this.showRecamaras;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showInmueble = false;
  this.showSearch = false;
}

// Función para mostrar/ocultar la barra de resultados de escritura en busqueda
toggleSearch() {
  this.showSearch = !this.showSearch;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showInmueble = false;
  this.showRecamaras = false;
}

detalle(){
  this.router.navigate(['/details-inm']);

}




}
