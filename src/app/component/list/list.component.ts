import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  states = [];
  cities = [];
  constructor( private router: Router) { }

  ngOnInit(): void {
  
   
  }
  form = new FormGroup({
    states: new FormControl('', Validators.required)
  });
  submit(state) {
    this.cities = this.states.find(city => city.cityId == state.stateId).cities;
  }
 /*  onSelect(states) {
    this.router.navigate(['/:id',states.stateId]);
  } */

}
