import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formu1',
  templateUrl: './formu1.component.html',
  styleUrls: ['./formu1.component.css']
})
export class Formu1Component {
  constructor(private router: Router){}
  For3(){ 
    this.router.navigate(['/formu3']);  
  
  }

    name: string = 'Pedro';



}
