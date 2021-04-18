import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';

@Component({
  selector: 'app-nda-listings',
  templateUrl: './nda-listings.component.html',
  styleUrls: ['./nda-listings.component.scss']
})
export class NdaListingsComponent implements OnInit {

  creditsCount: number = 3;

  List: any = [
    { title: "ACTIVITY NAME", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." },
    { title: "ACTIVITY NAME", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." },
  ]

  constructor(
    private config: ConfigService,
    private apiCallService: ApiCallService
  ) { }

  ngOnInit(): void {
    if (this.List.length <= 3) this.creditsCount = 3 - this.List.length; 
    else this.creditsCount = 0;

    this.getNDA();
  }

  getNDA() {
    this.apiCallService.getAll(this.config.tables.nda).subscribe(res => {
      // method to format firebase data in pretty form
      // this.Categories = this.apiCallService.formatDataListing(res);
      console.log(res);
    })
  }

}
