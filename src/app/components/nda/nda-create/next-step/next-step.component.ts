import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../../core/http/config/config.service';
import { ApiCallService } from '../../../../core/http/api-call/api-call.service';
import { LoginService } from '../../../../core/services/login/login.service';

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
  user: any = {};

  constructor(
    private router: Router,
    private config: ConfigService,
    private login: LoginService,
    private apiCallService: ApiCallService
  ) { }

  ngOnInit(): void {
    this.user = this.login.getUserData();
  }

  changeStep(step) {
    this.stepFn.emit(step);
  }

  changeMobile(event) {
    this.mobile = event.target.value;
  }

  convertSvgToString(svg) {
    if (svg.nodeType === Node.ELEMENT_NODE) {
      var s = new XMLSerializer();
      var str = s.serializeToString(svg);

      return str;
    }
    else {
      return '';
    }
  }

  save() {
    let data = {
      ...this.generalInfo,
      signature: this.convertSvgToString(this.signature),
      partner: this.mobile,
      created_by: this.user.Id,
    }

    this.apiCallService.post(this.config.tables.nda, data).subscribe(res => {
      if (res) {
        alert('NDA Saved.');
        this.router.navigateByUrl('/nda/nda-listings');
      }
    });
  }

}
