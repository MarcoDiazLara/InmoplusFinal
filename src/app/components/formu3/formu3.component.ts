import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formu3',
  templateUrl: './formu3.component.html',
  styleUrls: ['./formu3.component.css']
})
export class Formu3Component {
  constructor(private router: Router){}
  Subir(){ 
    this.router.navigate(['/subirimagenes']);  
  
  }
}
