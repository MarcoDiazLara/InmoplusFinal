import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent {
  constructor(private router: Router){}
  VolverIndex(){
    this.router.navigate(['/pagina1']);
  }
  


}
