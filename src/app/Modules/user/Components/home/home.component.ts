
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CarouselService } from '../../../../Shared/services/carousel.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  images = this.carouselService.images;
  isLoading = this.carouselService.isLoading; // ✅ Track loading state



  carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 1500, // Time in milliseconds
    autoplayHoverPause: true,
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


  constructor(private carouselService:CarouselService) {

   }








}
