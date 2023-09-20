import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formu1',
  templateUrl: './formu1.component.html',
  styleUrls: ['./formu1.component.css']
})


export class Formu1Component {
  constructor(private router: Router,
    private httpclient: HttpClient){}
    public xd: any;

    

  For4(){ 
    //this.router.navigate(['/formu4']);  
    this.httpclient.get('http://localhost:3000/inmuebles/tipo').subscribe(data => {this.xd = data});
    console.log(this.xd);
  }
 
  
    name: string = 'Pedro';



}
