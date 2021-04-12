import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nda-create',
  templateUrl: './nda-create.component.html',
  styleUrls: ['./nda-create.component.scss']
})
export class NdaCreateComponent implements OnInit {

  step: number = 1;

  generalInfo: any = {};
  signature: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getStep(event) {
    if(event != 3) this.step = event;
    else this.nextStep();
  }

  nextStep() {
    if (this.generalInfo && this.signature && this.generalInfo.agree) {
      this.step = 3;
    } else {
      console.log('data is not completed');
    }
  }

  getGeneralInfo(info) {
    console.log(info);
    this.generalInfo = info;
  }

  getSignature(sign) {
    console.log(sign);
    this.signature = sign;
  }

}
