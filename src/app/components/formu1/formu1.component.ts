import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/servicios/http/http.service';
import {MatInputModule} from '@angular/material/input';
import { Inmuebles } from 'src/app/servicios/interfaces/interface';




@Component({
  selector: 'app-formu1',
  templateUrl: './formu1.component.html',
  styleUrls: ['./formu1.component.css']
})


export class Formu1Component implements OnInit{
  
  inmuebles: Inmuebles[] =[];
  inmueble!: Inmuebles;
  formInmueble!:FormGroup;
  loading = false;

 
  constructor(private router: Router,
    private httpclient: HttpClient,
    private formBuilder: FormBuilder,
    private httpService: HttpService,){}
    
 
    ngOnInit(){ 

    this.obtenerDatosInmuebles();
  
    this.formInmueble = this.formBuilder.group({
     Id_Tipo_Inmueble: ['',[Validators.required]]
    })
  }

  obtenerDatosInmuebles(){
 this.httpService.tipoInmueble().subscribe((resp:any)=>{
  if(resp !== 201){
    console.log(resp);
    this.inmueble = resp[0].Id_Tipo_Inmueble;
    this.inmuebles = resp;
  }
 },(err)=>{
  console.log(err);
 })
}

sendData(){
let idTipoInmo =  this.formInmueble.value.Id_Tipo_Inmueble;
    console.log("idTipo: "+ idTipoInmo);
    this.httpService.insertarDatosUsuario("marco",13456).subscribe((data: any) => {
      if(data == 1){
        console.log("Se inserto");
      }else{
        console.log("Error al insertar");
      }
    });

}
 



}
