
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  images = [
    '/Angula framework image seo.webp',
    '/Django.webp',
    '/Front-End-Development-Frameworks.png',
    '/React_logo_wordmark.png',
    '/Net-Logo-PNG-Image.png',
    '/laravel-framework-min-1.webp',
    '/node-js-logo-1024x512.webp'

  ];


  carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 1500, // Time in milliseconds (3 seconds)
    autoplayHoverPause: true, // Pause on hover
    responsive: {
      0: {
        items: 1,
        margin: 10 // Adjust for smaller screens
      },
      600: {
        items: 2,
        margin: 15 // Adjust for smaller screens
      },
      1000: {
        items: 3,
        margin: 20 // Adjust for smaller screens
      }
    }
  };


  constructor() { }

  ngOnInit(): void { }



}
