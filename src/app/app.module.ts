import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

//translation
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ContactService } from './services/contact.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ProjectsComponent,
    AdminProjectsComponent,
    SigninComponent,
    EducationComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
         // ngx-translate and the loader module
         HttpClientModule,
         TranslateModule.forRoot({
             loader: {
                 provide: TranslateLoader,
                 useFactory: HttpLoaderFactory,
                 deps: [HttpClient],
                 
             }
         })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
      ContactService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

  // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}
