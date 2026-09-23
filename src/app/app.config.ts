import { authActions } from './shared/store/auth-actions';
import { ApplicationConfig, provideBrowserGlobalErrorListeners,InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { authFeatures } from './shared/store/auth-feature';

import * as authEffects  from './shared/store/auth-effect';
import { provideNgToast } from 'ng-angular-popup';
export const API_URL = new InjectionToken<string>('API_URL')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideEffects(authEffects),
    provideState(authFeatures),
    {

      provide: API_URL,
      useValue: 'https://fakestoreapi.com'

    },

      provideNgToast({
      duration: 5000,              // Default 5 seconds
      position: "toaster-top-right",       // Default position
      maxToasts: 3,                // Max 3 toasts at once
      minWidth: 350,                  // Toast width in pixels
      })


  ]
};
