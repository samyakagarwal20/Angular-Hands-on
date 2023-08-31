import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-server]',
  // selector: '.app-server',
  templateUrl: './servers.component.html',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

}
