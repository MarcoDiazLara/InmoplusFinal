import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.css']
})
export class DescargaComponent {

  constructor(private router: Router){}

  Descarga(){ 
    this.router.navigate(['/paginadescarga']);  
  
  }

}
