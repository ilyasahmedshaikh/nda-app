import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../../../core/services/login/login.service';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  programForm: FormGroup;
  loginStatus: boolean = false;
  Users: any = [];

  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
    private checkLogin: LoginService,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);

    this.formInit();
    this.ifLogin();
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

  login() {
    const email = this.programForm.value.email;
    const password = this.programForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.apiCallService.getAll(this.config.tables.users).subscribe(res => {
        this.Users = this.apiCallService.formatDataListing(res);

        this.Users.forEach(user => {
          if (user.email == email) {
            this.checkLogin.setLoginData(user);
          }
        });
      })

      this.checkLogin.setLoginStatus(true);
      this.presentationalS.setPresentation('header', true);
      this.presentationalS.setPresentation('bottomBar', true);

      this.router.navigateByUrl('/nda/nda-listings');

      setTimeout(() => {
        location.reload();
      }, 1000);
    })
    .catch(err => {
      alert(err.message);
      console.log('Something went wrong: ', err.message);
    });
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      
      if (this.loginStatus) {
        this.router.navigateByUrl('/nda/nda-listing');
      }
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
    
  }

}
