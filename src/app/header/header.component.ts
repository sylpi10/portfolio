import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HomeService } from '../services/home.service';
import { HeaderService } from '../services/header.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected: Boolean = false;
  isHome: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private homeService: HomeService,
    private translateService: TranslateService,
    private headerService: HeaderService
  ) { }


  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if (userSession) {
          this.isConnected = true;
          // console.log(userSession);
        }else {
          this.isConnected = false;
          console.log('not connected');
        }
      }
    );
    
    this.homeService.isHome.subscribe(
      (value: boolean) => this.isHome = value
    );

    }
  
    useLanguage(language: string){
      this.headerService.useLanguage(language);
    }

  onLogOut(){
    this.authenticationService.signoutUser();
    this.router.navigate(['/home']);
  }

}
