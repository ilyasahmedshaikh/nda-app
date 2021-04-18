import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  constructor(
    private router: Router,
    private checkLogin: LoginService,
    private backNavigateService: BackNavigateService,
  ) { }

  ngOnInit(): void {
  }

  toggleBack(state?) {
    this.backNavigateService.toggleBackState(state);
  }

  logout() {
    this.checkLogin.setLoginStatus(false);
    this.checkLogin.logout();
    this.router.navigateByUrl("/auth/login");
  }

}
