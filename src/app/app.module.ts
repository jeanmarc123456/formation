import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { NotfoundModule } from './notfound/notfound.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { UIModule } from './ui/ui.module';
import { TexteModule } from './text/texte.module';
import { IconModule } from './icon/icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ClientModule,
    CoreModule,
    LoginModule,
    NotfoundModule,
    OrdersModule,
    SharedModule,
    TemplateModule,
    UIModule,
    TexteModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
