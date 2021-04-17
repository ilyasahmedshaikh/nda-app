import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', true);
    this.presentationalS.setPresentation('bottomBar', false);
  }

  signup() {
    this.router.navigateByUrl('/auth/login');
  }

}
