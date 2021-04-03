import { Component, OnInit } from '@angular/core';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private backNavigateService: BackNavigateService,
  ) { }

  ngOnInit(): void {
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

}
