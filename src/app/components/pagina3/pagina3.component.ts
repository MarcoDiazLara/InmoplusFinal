import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component {
  constructor(private router: Router){}

  Bus(){ 
    this.router.navigate(['/resultsearch']);  
  
  }





}
