import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    createAccountForm: FormGroup;
    states: {};
  cities: {};
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
      this.mainService.getStates().subscribe(states => {
          this.states = states;
      });
      this.createAccountForm = new FormGroup({
     
      state: new FormControl(''),
      city: new FormControl('')
    });
  }

    onChangeState(stateId: number) {
        if (stateId) {
            this.mainService.getCities(stateId).subscribe(data => {
                this.cities=data;
            })
        }
    }

}
