import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-digital-signature',
  templateUrl: './digital-signature.component.html',
  styleUrls: ['./digital-signature.component.scss']
})
export class DigitalSignatureComponent implements OnInit {

  @Output() sign = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getSignature(signature) {
    this.sign.emit(signature);
  }

}
