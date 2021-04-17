import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public generalInfo = new Subject<any>();
  public signature = new Subject<any>();
  public partner = new Subject<any>();

  constructor() { }

  setData(step, value) {
    if (step == 1) this.generalInfo.next(value);
    if (step == 2) this.signature.next(value);
    if (step == 3) this.partner.next(value);
  }

  resetData() {
    this.generalInfo.next('');
    this.signature.next('');
    this.partner.next('');
  }

  setGeneralInfo() {
    let data = {
      personGiving: "(name of person giving consent) 1",
      personSeeking: "(name of person seeking consent) 1",
      dated: "(date of potential sexual activity) 1",
      agree: false
    }

    this.setData(1, data);
  }
}
