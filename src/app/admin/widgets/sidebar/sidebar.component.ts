import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../../services/basic.service';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [BasicService]
})
export class SidebarComponent implements OnInit {
  isActive = false;
  showMenu = '';
  sideBarMenu = [];

  constructor(private baseService: BasicService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree({

      })
    });

    this.initData();
  }
  initData() {
    this.baseService.getData('/assets/sidebar.json').then(
      (data) => {
        this.sideBarMenu = data;
      }
    );
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}
