import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.scss']
})
export class NextStepComponent implements OnInit {
  
  @Output() stepFn = new EventEmitter<any>();

  @Input('generalInfo') generalInfo: any;
  @Input('signature') signature: any;

  mobile: number = 0;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  changeStep(step) {
    this.stepFn.emit(step);
  }

  changeMobile(event) {
    this.mobile = event.target.value;
  }

  save() {
    console.log(this.generalInfo);
    console.log(this.mobile);
    console.log(this.signature);
  }

}
