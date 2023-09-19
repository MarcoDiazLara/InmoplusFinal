import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formu4',
  templateUrl: './formu4.component.html',
  styleUrls: ['./formu4.component.css']
})
export class Formu4Component {
  constructor(private router: Router){}
  for3(){ 
    this.router.navigate(['/formu3']);  
  
  }

}
