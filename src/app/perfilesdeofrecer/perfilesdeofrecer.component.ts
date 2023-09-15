import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilesdeofrecer',
  templateUrl: './perfilesdeofrecer.component.html',
  styleUrls: ['./perfilesdeofrecer.component.css']
})
export class PerfilesdeofrecerComponent {

  constructor(private router: Router){}

  Formu1(){ 
    this.router.navigate(['/registro']);  
  
  }



}
