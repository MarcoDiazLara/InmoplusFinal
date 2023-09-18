import { Component } from '@angular/core';

@Component({
  selector: 'app-barralateralmenu',
  templateUrl: './barralateralmenu.component.html',
  styleUrls: ['./barralateralmenu.component.css']
})
export class BarralateralmenuComponent {
  
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
}
