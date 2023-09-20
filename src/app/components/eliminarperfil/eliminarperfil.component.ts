import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eliminarperfil',
  templateUrl: './eliminarperfil.component.html',
  styleUrls: ['./eliminarperfil.component.css']
})
export class EliminarperfilComponent {

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
