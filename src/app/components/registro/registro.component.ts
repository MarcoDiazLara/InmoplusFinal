import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  registro: any = {
    Correo_Electronico: "",
    Password: ""
  }

  constructor(private router: Router,
    private httpclient: HttpClient){}

  
  Registrar(){
    this.httpclient.post('http://localhost:3000/usuarios/agregar',this.registro).subscribe(()=> {this.router.navigate(["/resultsearch"])});
  }



}
