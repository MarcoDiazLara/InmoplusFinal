import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-inm',
  templateUrl: './details-inm.component.html',
  styleUrls: ['./details-inm.component.css']
})
export class DetailsInmComponent {
  constructor(private router: Router){}

  regresa(){
    this.router.navigate(['/resultsearch']);

 }


}
