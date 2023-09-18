import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {

  respuesta: any = {
    username: "",
    password:""
  
  };
  res: any;
  
  constructor(private router: Router,
    private httpclient: HttpClient){}
  Regis(){
    this.router.navigate(['/registro']);

 }

 login(){
  this.httpclient.post('http://localhost:3000/auth',this.respuesta,this.res).subscribe(()=> {this.router.navigate(["/pagina1"])});
 }
 
}
