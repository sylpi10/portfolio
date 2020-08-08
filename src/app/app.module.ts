import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { SigninComponent } from './authentication/signin/signin.component';

//translation
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ProjectsComponent,
    AdminProjectsComponent,
    SigninComponent
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
                 deps: [HttpClient]
             }
         })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}
