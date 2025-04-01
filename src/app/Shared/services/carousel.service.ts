import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private storedImages = this.getStoredImages();
  images = signal<string[]>(this.storedImages); // ✅ Ensures images exist immediately
  isLoading = signal<boolean>(true); // ✅ New signal to track loading

  constructor() {
    effect(() => {
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('carouselImages', JSON.stringify(this.images()));
      }
    });

    // ✅ Simulate loading delay (optional for better UX)
    setTimeout(() => this.isLoading.set(false), 500);
  }

  private getStoredImages(): string[] {
    if (this.isLocalStorageAvailable()) {
      const storedData = localStorage.getItem('carouselImages');
      return storedData && storedData !== '[]' ? JSON.parse(storedData) : this.getDefaultImages();
    }
    return this.getDefaultImages(); // Fallback for SSR
  }

  private getDefaultImages(): string[] {
    return [
      '/assets/Angular-framework-image.webp',
      '/assets/Django.webp',
      '/assets/Front-End-Development-Frameworks.png',
      '/assets/React_logo_wordmark.png',
      '/assets/Net-Logo-PNG-Image.png',
      '/assets/laravel-framework-min-1.webp',
      '/assets/node-js-logo-1024x512.webp'
    ];
  }

  updateImages(newImages: string[]) {
    this.images.set(newImages);
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
