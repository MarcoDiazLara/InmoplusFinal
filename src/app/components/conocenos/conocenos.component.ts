import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent {

  constructor(private router: Router){}
  Conoce(){
    this.router.navigate(['/conoce']);

 }





}
