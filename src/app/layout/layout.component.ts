import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenuComponent } from './sidebar/sidebar.component';
import { AppTopBarComponent } from './topbar/topbar.component';
// [@sidebarAnimation]="sideBarOpened ? 'open' : 'closed'"
@Component({
  selector: 'app-layout',
  template: `<div class="layout" [class.closed-sidebar]="!sideBarOpened">
    <app-topbar class="header" (toggleSidebar)="toggleSidebar()"></app-topbar>
    <app-sidebar
      class="sidebar"
      [@sidebarAnimation]="sideBarOpened ? 'open' : 'closed'"
    ></app-sidebar>
    <main>
      <!-- <h1>Angular Tanstack Table</h1> -->
      <router-outlet></router-outlet>
    </main>
  </div>`,
  standalone: true,
  imports: [RouterModule, AppTopBarComponent, AppMenuComponent, CommonModule],
  animations: [
    trigger('sidebarAnimation', [
      state(
        'open',
        style({
          opacity: 1,
          width: '250px',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          width: '0',
        })
      ),
      transition('open => closed', [animate('0.3s ease')]),
      transition('closed => open', [animate('0.3s ease')]),
    ]),
  ],
})
export class AppLayoutComponent {
  sideBarOpened: boolean = true;
  toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
  }
}
