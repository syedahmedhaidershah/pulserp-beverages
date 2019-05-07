import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-router-links',
  templateUrl: './router-links.component.html',
  styleUrls: ['./router-links.component.css']
})
export class RouterLinksComponent implements OnInit {

  routerLinks = [
    { label: 'Home', link: 'home' },
    { label: 'Salesmen', link: 'salesmen' },
    { label: 'Accounts', link: 'accounts' },
    { label: 'Reports', link: 'reporting' }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.highlightLink();
  }

  highlightLink() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const el: any = document.getElementById('link-'.concat(event.url.split('/')[1].toLowerCase()));
        $('.router-link').removeClass('active');
        $(el).addClass('active');
      }
    });
  }

  navigateTo(link) {
    this.router.navigate([link]);
  }

}
