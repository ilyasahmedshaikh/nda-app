import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

  login() {
    this.presentationalS.setPresentation('header', true);
    this.presentationalS.setPresentation('bottomBar', true);

    this.router.navigateByUrl('/nda/nda-listings');
  }

}
