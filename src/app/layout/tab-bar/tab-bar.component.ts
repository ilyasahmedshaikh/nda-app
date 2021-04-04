import { Component, OnInit } from '@angular/core';
import{ BackNavigateService } from '../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  constructor(
    private backNavigateService: BackNavigateService,
  ) { }

  ngOnInit(): void {
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

}
