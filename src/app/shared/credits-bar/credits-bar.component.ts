import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits-bar',
  templateUrl: './credits-bar.component.html',
  styleUrls: ['./credits-bar.component.scss']
})
export class CreditsBarComponent implements OnInit {

  @Input('credits') credits: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
