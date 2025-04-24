import { NgModule, isDevMode } from '@angular/core';
import {BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HandleErrorInterceptor } from './Shared/Interceptors/handle-error-interceptor';
import { LoggerInterceptor } from './Shared/Interceptors/logger-interceptor';

import { SharedModule } from './Shared/shared.module';

import { AppTranslateModule } from './Shared/Modules/app-translate/app-translate.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    //CommonModule,
    BrowserModule,
    SharedModule,
    AppTranslateModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }) // Ensure HttpClientModule is imported
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()), // <-- Add this line to enable fetch
    {provide:HTTP_INTERCEPTORS,useClass:HandleErrorInterceptor,multi:true},
    { provide: HTTP_INTERCEPTORS,useClass: LoggerInterceptor, multi: true},
    provideAnimationsAsync(),
    // importProvidersFrom(HttpClientModule),
    // importProvidersFrom(AppTranslateModule.forRoot())
    //importProvidersFrom(BrowserAnimationsModule, CarouselModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
