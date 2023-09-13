import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultSearchComponent } from '../result-search/result-search.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router: Router){}
  result(){
    this.router.navigate(['/result-search']);

  }

}

