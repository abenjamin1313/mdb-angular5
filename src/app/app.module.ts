import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';

// Material Design
import { MDBBootstrapModule, WavesModule  } from 'angular-bootstrap-md';
// routing
import { AppRoutingModule } from './app-routing.module';
// components 
import { AppComponent } from './app.component';
// service
import { ErrorHandlerService } from './service/error-handler.service';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { FeaturesComponent } from './components/features/features.component';
import { BlogComponent } from './components/blog/blog.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NotFoundComponentComponent,
    FeaturesComponent,
    BlogComponent,
    TeamComponent,
    ContactComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    WavesModule 
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
