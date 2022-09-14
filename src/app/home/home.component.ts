import { Component, OnInit, HostListener, AfterContentInit } from '@angular/core';
import { Router } from "@angular/router";
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
 onScroll = false;
 activeMenu:any;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
   
    if (document.documentElement.scrollTop == 0) {
      this.onScroll = false;
    }else{
      this.onScroll = true;
    }
  }

  goToSection(elementId:string) {
    this.viewportScroller.scrollToAnchor(elementId);
    this.activeMenu = elementId;
  }  
  goToWork() {
    this.viewportScroller.scrollToAnchor('portfolio-header');
    //this.activeMenu = elementId;
  }
  
  ngOnInit(): void {
    // Set Default active menu
    this.activeMenu = "top";
  }
  

}