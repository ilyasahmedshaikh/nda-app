import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: FormGroup;
  error: boolean = false;
  errorMsg: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', true);
    this.presentationalS.setPresentation('bottomBar', false);

    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cPassword: ['', Validators.required],
    });
  }

  signup() {
    if (this.programForm.status == 'INVALID') {
      this.error = true;
      this.errorMsg = "Don't leave any field empty."

      setTimeout(() => { this.error = false; }, 1000);
    } 
    else {
      if (this.programForm.value.password && this.programForm.value.cPassword && this.programForm.value.password != this.programForm.value.cPassword) {
        this.error = true;
        this.errorMsg = "Password fields doesn't match."
        setTimeout(() => { this.error = false; }, 1000);
      }
      else {
        this.auth.createUserWithEmailAndPassword(this.programForm.value.email, this.programForm.value.password)
        .then(value => {
          let data = {
            firstName: this.programForm.value.firstName,
            lastName: this.programForm.value.lastName,
            email: this.programForm.value.email,
            user_type: 'user'
          };

          this.apiCallService.post(this.config.tables.users, data).subscribe(res => {
            if (res) {
              alert('Signup Success.');
              this.router.navigateByUrl('/auth/login');
            }
          })
        })
        .catch(err => {
          alert(err.message);
          console.log('Something went wrong: ', err.message);
        });
      }
    }
  }

}
