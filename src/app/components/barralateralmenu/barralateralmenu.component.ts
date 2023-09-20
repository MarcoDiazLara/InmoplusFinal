import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barralateralmenu',
  templateUrl: './barralateralmenu.component.html',
  styleUrls: ['./barralateralmenu.component.css']
})
export class BarralateralmenuComponent {

  constructor(private router: Router){}

  toggleSubmenu() {
    const submenuContainer = document.getElementById('submenu_config');

    if(submenuContainer) { 
      if (submenuContainer.style.display === 'none' || submenuContainer.style.display === '') {
        submenuContainer.style.display = 'block'; // Mostrar el submenu
    } else {
        submenuContainer.style.display = 'none'; // Ocultar el submenu
    }
    }
}

  toggleSubmenu2() {
    const submenuContainer2 = document.getElementById('submenu_config2');

    if(submenuContainer2) { 
      if (submenuContainer2.style.display === 'none' || submenuContainer2.style.display === '') {
        submenuContainer2.style.display = 'block'; // Mostrar el submenu
    } else {
        submenuContainer2.style.display = 'none'; // Ocultar el submenu
    }
    }
  }
  toggleSubmenu3() {
    const submenuContainer2 = document.getElementById('submenu_config3');

    if(submenuContainer2) { 
      if (submenuContainer2.style.display === 'none' || submenuContainer2.style.display === '') {
        submenuContainer2.style.display = 'block'; // Mostrar el submenu
    } else {
        submenuContainer2.style.display = 'none'; // Ocultar el submenu
    }
    }
  }

  lista(){
    this.router.navigate(['/listainventarios']);
  }

  agrega(){
    this.router.navigate(['/agregarinventario']);
  }

  asignar(){
    this.router.navigate(['/asignarreasignar']);
  }

  privacidad(){
    this.router.navigate(['/privacidad']);
  }
}
