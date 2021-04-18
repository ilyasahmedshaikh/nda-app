import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-nda-details',
  templateUrl: './nda-details.component.html',
  styleUrls: ['./nda-details.component.scss']
})
export class NdaDetailsComponent implements OnInit {

  data: any = {};
  svg: SafeHtml;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    this.svg = this.sanitizer.bypassSecurityTrustHtml(this.data.signature);    
  }

}
