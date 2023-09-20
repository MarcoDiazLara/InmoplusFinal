import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactobroker',
  templateUrl: './contactobroker.component.html',
  styleUrls: ['./contactobroker.component.css']
})
export class ContactobrokerComponent {


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
