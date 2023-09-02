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
  serverCreated: boolean = false;
  serverNameViaEventBinding: string = '';
  serverNameViaTwoWayBinding: string = '';
  servers: Array<string> = ['TestServer 1', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverNameViaEventBinding);
    this.serverCreationStatus = "New server created with name " + (this.serverNameViaEventBinding ? this.serverNameViaEventBinding : '<empty>') + " using event binding";
    this.serverCreated = false;
  }

  onUpdateServerName(event: InputEvent) {
    // console.log(event);
    this.serverNameViaEventBinding = (<HTMLInputElement>event.target).value;
  }

}
