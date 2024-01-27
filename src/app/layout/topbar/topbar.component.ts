import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  standalone: true,
})
export class AppTopBarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  toggleSlidebar() {
    this.toggleSidebar.next();
  }
}
