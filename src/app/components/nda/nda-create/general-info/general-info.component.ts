import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  @Output() stepFn = new EventEmitter<any>();
  @Output() generalInfo = new EventEmitter<any>();

  personGiving: string = "(name of person giving consent)";
  personSeeking: string = "(name of person seeking consent)";
  dated: string = "(date of potential sexual activity)";

  constructor() { }

  ngOnInit(): void {
  }

  changeStep(step) {
    if (this.personGiving && this.personSeeking && this.dated) {
      this.stepFn.emit(step);
    }
  }

  getPersonGiving() {
    this.personGiving = prompt("Name of person giving consent", "Your Name");
    this.getGeneralInfo();
  }

  getPersonSeeking() {
    this.personSeeking = prompt("Name of person seeking consent", "Their Name");
    this.getGeneralInfo();
  }

  getDated() {
    this.dated = prompt("Date of potential sexual activity", "dd-MM-YYYY");
    this.getGeneralInfo();
  }

  getGeneralInfo() {
    let data = {
      personGiving: this.personGiving,
      personSeeking: this.personSeeking,
      dated: this.dated
    };

    this.generalInfo.emit(data)
  }

}
