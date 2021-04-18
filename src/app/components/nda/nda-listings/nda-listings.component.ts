import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-nda-listings',
  templateUrl: './nda-listings.component.html',
  styleUrls: ['./nda-listings.component.scss']
})
export class NdaListingsComponent implements OnInit {

  creditsCount: number = 3;

  List: any = []

  constructor(
    private router: Router,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private backNavigateService: BackNavigateService,
  ) { }

  ngOnInit(): void {
    this.getNDA();
  }

  getNDA() {
    this.apiCallService.getAll(this.config.tables.nda).subscribe(res => {
      // method to format firebase data in pretty form
      this.List = this.apiCallService.formatDataListing(res);

      if (this.List.length <= 3) this.creditsCount = 3 - this.List.length; 
      else this.creditsCount = 0;
    })
  }

  toggleBack(state?) {
    this.backNavigateService.toggleBackState(state);
  }

  describe(item) {
    this.router.navigate(['/nda/nda-details'], { state: { data: item } });
    this.toggleBack(true);
  }

}
