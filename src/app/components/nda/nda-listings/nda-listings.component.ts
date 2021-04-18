import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';

@Component({
  selector: 'app-nda-listings',
  templateUrl: './nda-listings.component.html',
  styleUrls: ['./nda-listings.component.scss']
})
export class NdaListingsComponent implements OnInit {

  creditsCount: number = 0;

  List: any = []

  constructor(
    private config: ConfigService,
    private apiCallService: ApiCallService
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

}
