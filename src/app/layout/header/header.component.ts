import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  backBtnState: boolean = false;
  headerShow: boolean = true;

  constructor(
    private router: Router,
    private backNavigateService: BackNavigateService,
    private location: Location,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.backNavigateService.back.subscribe(res => {
      this.backBtnState = res;
      console.log(this.backBtnState);
      
    });

    this.presentationalS.header.subscribe(res => {
      this.headerShow = res;
    })
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

  back() {
    this.backNavigateService.backLocation();
  }

}
