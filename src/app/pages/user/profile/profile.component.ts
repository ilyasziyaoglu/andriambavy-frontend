import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../services/base/storage.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: any;
  orders: any = [];
  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.user = this.storageService.storage['user'];
  }

}
