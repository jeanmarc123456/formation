import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';
import { IconModule } from './icon/icon.module';
import { LoginModule } from './login/login.module';
import { OrdersModule } from './orders/orders.module';
import { NotfoundModule } from './page-not-found/notfound.module';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { TexteModule } from './texte/texte.module';
import { UIModule } from './ui/ui.module';

registerLocaleData(localeFr, 'fr-FR')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
