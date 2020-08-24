import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PrincipalNavComponent } from './components/principal-nav/principal-nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PrincipalNavComponent,
    SidebarComponent,
    MenuOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
