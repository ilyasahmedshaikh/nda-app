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

  constructor(
  ) { }

  ngOnInit(): void {
  }

  changeStep(step) {
    this.stepFn.emit(step);
  }

  save() {
    console.log(this.generalInfo);
    console.log(this.signature);
  }

}
