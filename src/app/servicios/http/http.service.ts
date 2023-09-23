import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  url = "http://localhost/servicios/";
  constructor(private httpclient: HttpClient) { }

  tipoInmueble(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarTipoInmuebles.php', params, { headers });
  }

  iniciarSesion(correo_Electronico: string, Password: string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'correo_Electronico'+ correo_Electronico + 'Password' + Password;
    return this.httpclient.post(this.url + 'autenticacion.php', params, { headers });
  }

insertarDatosInmueble(idTipoInmueble:number ){
  
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'idTipoInmueble'+ idTipoInmueble;
    return this.httpclient.post(this.url + 'insertarUsuario.php', params, { headers });
  }

  insertarDatosUsuario(nombreUsuario: string, telefono: number ){
  
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'nombreUsuario' + nombreUsuario + 'telefono' + telefono;
    return this.httpclient.post(this.url + 'insertarUsuario.php', params, { headers });
  }

}
