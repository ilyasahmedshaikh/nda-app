import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgWhiteboardService } from 'ng-whiteboard';
import { DataSharingService } from '../../../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-digital-signature',
  templateUrl: './digital-signature.component.html',
  styleUrls: ['./digital-signature.component.scss']
})
export class DigitalSignatureComponent implements OnInit {

  @Output() stepFn = new EventEmitter<any>();
  @Output() getsignature = new EventEmitter<any>();

  constructor(
    private whiteboardService: NgWhiteboardService,
    private dataSharing: DataSharingService
  ) { }

  ngOnInit(): void {
  }

  save() {
    // this.whiteboardService.save();
    this.svgToBase64();
  }

  clear() {
    this.whiteboardService.erase();
  }

  svgToBase64() {
    let board = document.getElementById("board");
    let sign = board.querySelectorAll("svg")[0];
    
    this.getsignature.emit(sign);
    this.dataSharing.setData(2, sign);
    this.stepFn.emit(1);
  }

}
