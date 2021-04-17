import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataSharingService } from '../../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-nda-create',
  templateUrl: './nda-create.component.html',
  styleUrls: ['./nda-create.component.scss']
})
export class NdaCreateComponent implements OnInit {

  step: number = 1;

  generalInfo: any = {};
  signature: any = {};

  constructor(
    private dataSharing: DataSharingService
  ) { }

  ngOnInit(): void {
    this.dataSharing.generalInfo.subscribe(info => {
      this.generalInfo = info;

      console.log(info);
    });

    this.dataSharing.signature.subscribe(sign => {
      this.signature = sign;
      
      console.log(sign);
    });
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

}
