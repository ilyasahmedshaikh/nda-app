import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../../core/http/config/config.service';
import { ApiCallService } from '../../../../core/http/api-call/api-call.service';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.scss']
})
export class NextStepComponent implements OnInit {
  
  @Output() stepFn = new EventEmitter<any>();

  @Input('generalInfo') generalInfo: any;
  @Input('signature') signature: any;

  mobile: number;

  constructor(
    private router: Router,
    private config: ConfigService,
    private apiCallService: ApiCallService
  ) { }

  ngOnInit(): void {
  }

  changeStep(step) {
    this.stepFn.emit(step);
  }

  changeMobile(event) {
    this.mobile = event.target.value;
  }

  convertSvgToString(svg) {
    var s = new XMLSerializer();
    var str = s.serializeToString(svg);

    return str;
  }

  save() {
    let data = {
      ...this.generalInfo,
      signature: this.convertSvgToString(this.signature),
      partner: this.mobile,
    }

    this.apiCallService.post(this.config.tables.nda, data).subscribe(res => {
      if (res) {
        alert('NDA Saved.');
        this.router.navigateByUrl('/nda/nda-listings');
      }
    });
  }

}
