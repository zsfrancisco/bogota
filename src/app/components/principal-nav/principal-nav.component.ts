import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-nav',
  templateUrl: './principal-nav.component.html',
  styleUrls: ['./principal-nav.component.css']
})
export class PrincipalNavComponent {

  constructor() { }

  // infoNumber is the number used in the nav
  public get infoNumber() : number {
    return 30;
  }

}
