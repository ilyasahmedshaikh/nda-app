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
      console.log(info);
      this.generalInfo = info;
    });

    this.dataSharing.signature.subscribe(sign => {
      // console.log(sign);
      this.signature = sign;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
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
