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





   navegacion(){
      this.router.navigate(['/pagina2']);


   }
   publi(){
    this.router.navigate(['/perfilesdeofrecer']);


 }







}
