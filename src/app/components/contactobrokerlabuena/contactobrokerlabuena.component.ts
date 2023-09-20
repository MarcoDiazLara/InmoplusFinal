import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactobrokerlabuena',
  templateUrl: './contactobrokerlabuena.component.html',
  styleUrls: ['./contactobrokerlabuena.component.css']
})
export class ContactobrokerlabuenaComponent {


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
