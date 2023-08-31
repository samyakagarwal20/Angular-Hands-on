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
  serverCreationStatus: string = 'No servers created';
  serverNameViaEventBinding: string = '';
  serverNameViaTwoWayBinding: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "New server created!";
  }

  onUpdateServerName(event: InputEvent) {
    // console.log(event);
    this.serverNameViaEventBinding = (<HTMLInputElement>event.target).value;
  }

}
