import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nda-create',
  templateUrl: './nda-create.component.html',
  styleUrls: ['./nda-create.component.scss']
})
export class NdaCreateComponent implements OnInit {

  step: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getStep(event) {
    this.step = event;
  }

}
