import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/servicios/http/http.service';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {

  formLogin!:FormGroup;
  
  constructor(private router: Router,
    private httpclient: HttpClient,
    private httpService: HttpService,
    private formBuilder: FormBuilder){}
  

    ngOnInit() {
      this.formLogin = this.formBuilder.group({
        correo_Electronico: ['',[Validators.required]],
        Password: ['',[Validators.required]]
       })
     }
    

    loginp(){
      console.log(this.formLogin.value.correo_Electronico,this.formLogin.value.Password);
      this.httpService.iniciarSesion(this.formLogin.value.correo_Electronico,this.formLogin.value.Password).subscribe((data: any) => {
        if(data == 1){
          this.router.navigate(["/registrocompleto"]);
        }else{
          alert(data);
        }
      });
    }

  Regis(){
    this.router.navigate(["/registro"]);
  }
//  login(){
//   this.httpclient.post('http://localhost:3000/auth',this.respuesta,this.res).subscribe(()=> {this.router.navigate(["/registrocompleto"])});
//  }
 
}
