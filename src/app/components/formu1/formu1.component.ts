import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formu1',
  templateUrl: './formu1.component.html',
  styleUrls: ['./formu1.component.css']
})


export class Formu1Component{
  constructor(private router: Router,
    private httpclient: HttpClient){}
    public xd: any[] = [];
    public hola: string[] = [];
    
    

    ngOnInit(){ 
    this.httpclient.get<any[]>('http://localhost:3000/inmuebles/tipo').subscribe(data => {this.xd = data});
    for(let i = 0 ; i < this.xd.length ; i++){
      this.hola[i] = this.xd[i].Tipo_Inmueble;
  }
  console.log(this.hola);
  }
 
  For4(){

  }
  
    name: string = 'Pedro';



}
