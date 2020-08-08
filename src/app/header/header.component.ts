import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../services/home.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected: Boolean = false;
  isHome: any;
  activatedRoute: ActivatedRoute

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private homeService: HomeService,
  ) { }


  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if (userSession) {
          this.isConnected = true;
          console.log(userSession);
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


  onLogOut(){
    this.authenticationService.signoutUser();
    this.router.navigate(['/home']);
  }

}
