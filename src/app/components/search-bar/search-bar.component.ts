import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private ref: ElementRef, private route: Router){}
  
  onSubmit(form: NgForm){
    this.route.navigate(['search', form.value.search]);
  }
}
