import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactoexperiencia',
  templateUrl: './contactoexperiencia.component.html',
  styleUrls: ['./contactoexperiencia.component.css']
})
export class ContactoexperienciaComponent {

  constructor(private router: Router){}

  contacto2(){
    this.router.navigate(['/contactobroker2']);
  }

  contacto3(){
    this.router.navigate(['/contactobroker3']);
  }

  borrar(){
    this.router.navigate(['/eliminar']);
  }

}
