import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  constructor(private router: Router){}
  Regis(){
    this.router.navigate(['/registro']);

 }

}
