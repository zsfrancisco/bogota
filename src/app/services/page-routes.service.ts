import { Injectable } from '@angular/core';
import { IPageRoute } from '../interfaces/page-route';

@Injectable({
  providedIn: 'root'
})
export class PageRoutesService {

  // _defaultClass is the item's class by defaault in _routes
  private _defaultClass: string = "flex-sm-fill text-sm-left nav-link";

  // _routes is the routes used in the test
  private _routes: IPageRoute[] = [
    { description: "Pacientes registrados", route: "/patients", class: this._defaultClass, icon: "assets/icons/one.svg" },
    { description: "Registro manual", route: "/register", class: this._defaultClass, icon: "assets/icons/two.svg" },
    { description: "Carga masiva", route: "/load", class: this._defaultClass, icon: "assets/icons/three.svg" },
  ]

  // getRoutes returns an array with the routes by default in the tests
  getRoutes(): IPageRoute[] {
    return this._routes;
  }

}
