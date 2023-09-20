import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})





export class NavmenuComponent 
{
 constructor(private router: Router){}
  opcion1() {
    alert('Opción 1 seleccionada');
  }

  opcion2() {
    alert('Opción 2 seleccionada');
  }

  opcion3() {
    alert('Opción 3 seleccionada');
  }



  ventanaVisible = false;

  mostrarVentana() {
    this.ventanaVisible = true;
  }

  cerrarVentana() {
    this.ventanaVisible = false;
  }

 
  


   navegacion(){
      this.router.navigate(['/pagina2']);


   }
   Regis(){
    this.router.navigate(['/registro']);
 }
  
 formulario(){
  this.router.navigate(['/formu1']);
}

 
VolverIndex(){
  this.router.navigate(['/pagina1']);
}

xdxd(){
  this.router.navigate(['/inmobiformu']);
}




}
