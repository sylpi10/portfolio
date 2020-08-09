import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HomeService } from '../services/home.service';
import { HeaderService } from '../services/header.service';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected: Boolean = false;
  isHome: any;
  currentLang: string;

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

  this.translateService.setDefaultLang('fr');
  this.currentLang = 'fr';
    
    this.homeService.isHome.subscribe(
      (value: boolean) => this.isHome = value
    );

    // this.headerService.currentLangue.subscribe(
    //   lang => this.currentLang = lang)
    
  }
  
    useLanguage(language: string){
      this.headerService.useLanguage(language);
    }

  onLogOut(){
    this.authenticationService.signoutUser();
    this.router.navigate(['/home']);
  }


    @HostListener('window:scroll', ['$event'])
    scrollHandler(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-white');
    } else {
      element.classList.remove('bg-white');
    }
  }
}
