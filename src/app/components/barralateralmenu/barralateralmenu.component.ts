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
}
