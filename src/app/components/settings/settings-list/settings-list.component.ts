import { Component, OnInit } from '@angular/core';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  constructor(
    private backNavigateService: BackNavigateService,
  ) { }

  ngOnInit(): void {
  }

  toggleBack(state?) {
    this.backNavigateService.toggleBackState(state);
  }

}
