import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subirimagenes',
  templateUrl: './subirimagenes.component.html',
  styleUrls: ['./subirimagenes.component.css']
})
export class SubirimagenesComponent {
  name: string = 'Pedro';
  constructor(private router: Router){}
  contacto2(){
    this.router.navigate(['/details-inm']);
  }

}
