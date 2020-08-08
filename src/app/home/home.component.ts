import { Component, OnInit, Input, Injectable, OnDestroy } from '@angular/core';
import { HomeService } from '../services/home.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  isHome: boolean; 
  homeSubcription: Subscription;

  constructor(private homeService: HomeService,
    ) { }

  ngOnInit(): void {
    // this.homeService.isHome.next(false);
    this.homeSubcription = this.homeService.isHome.subscribe(
      (value: any) => {
        this.isHome = value;
      }
      );
      this.homeService.emitHome();
  }

  ngOnDestroy(): void {
    this.homeSubcription.unsubscribe();
  }
}
