import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataSharingService } from '../../../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  @Output() stepFn = new EventEmitter<any>();
  @Input('generalInfo') generalInfo: any;

  personGiving: string = "(name of person giving consent)";
  personSeeking: string = "(name of person seeking consent)";
  dated: string = "(date of potential sexual activity)";
  agree: boolean = false;

  constructor(
    private dataSharing: DataSharingService
  ) { }

  ngOnInit(): void {
    if (!this.generalInfo.agree) {
      this.dataSharing.setGeneralInfo();
    }

    this.agree = this.generalInfo.agree
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

  changeAgree(event) {
    this.agree = event.target.value;
    this.getGeneralInfo();
  }

  getGeneralInfo() {
    let data = {
      personGiving: this.personGiving,
      personSeeking: this.personSeeking,
      dated: this.dated,
      agree: this.agree
    };

    this.dataSharing.setData(1, data);
  }

}
