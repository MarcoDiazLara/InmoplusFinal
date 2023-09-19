import { Component } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrocompleto',
  templateUrl: './registrocompleto.component.html',
  styleUrls: ['./registrocompleto.component.css']
})
export class RegistrocompletoComponent {

  constructor(private httpclient: HttpClient,
    private router: Router){
    
  }

  allData: any ={
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    CURP: "",
    RFC: "",
    Nombre_Usuario: "",
    Tel_Casa: "",
    Tel_Cel: "",
    Correo_electronico: ""
  }
  
  allRegis(){
    this.httpclient.post("http://localhost:3000/usuarios/alldata", this.allData).subscribe(()=> {this.router.navigate(["/pagina2"])});
  }

}
