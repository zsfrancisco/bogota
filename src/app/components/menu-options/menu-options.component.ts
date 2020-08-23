import { Component, OnInit } from '@angular/core';
import { IPageRoute } from '../../interfaces/page-route';
import { PageRoutesService } from '../../services/page-routes.service';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuOptionsComponent implements OnInit {

  private _routes: IPageRoute[] = [];

  constructor(
    private pageRoutesService: PageRoutesService,
  ) { }

  ngOnInit(): void {
    const routesReturned: IPageRoute[] = this.pageRoutesService.getRoutes();
    this._routes = routesReturned;
  }

  public get routes() : IPageRoute[] {
    return this._routes;
  }

}
