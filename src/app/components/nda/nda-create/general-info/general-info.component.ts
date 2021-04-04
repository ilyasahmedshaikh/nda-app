import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  @Output() stepFn = new EventEmitter<any>();

  personGiving: string = "(name of person giving consent)";
  personSeeking: string = "(name of person seeking consent)";
  dated: string = "(date of potential sexual activity)";

  constructor() { }

  ngOnInit(): void {
  }

  changeStep(step) {
    this.stepFn.emit(step);
  }

  getPersonGiving() {
    this.personGiving = prompt("Name of person giving consent", "Your Name");
  }

  getPersonSeeking() {
    this.personSeeking = prompt("Name of person seeking consent", "Their Name");
  }

  getDated() {
    this.dated = prompt("Date of potential sexual activity", "dd-MM-YYYY");
  }

}
