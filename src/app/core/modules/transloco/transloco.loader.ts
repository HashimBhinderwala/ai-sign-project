import {HttpClient} from '@angular/common/http';
import {Translation, TRANSLOCO_SCOPE, TranslocoLoader} from '@jsverse/transloco';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common'; // <-- ADDED THIS IMPORT

import {catchError, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  // Get the platform ID to check the environment
  private platformId = inject(PLATFORM_ID); // <-- ADDED THIS INJECTION

  getTranslation(langPath: string): Observable<Translation> {
    // Check if the app is running in the browser or on the server
    const baseUrl = isPlatformBrowser(this.platformId)
      ? '' // Use a relative path in the browser
      : 'http://localhost:4200'; // Use a full URL on the server

    const assetPath = `${baseUrl}/assets/i18n/${langPath}.json`;

    return this.http.get<Translation>(assetPath).pipe(
      catchError(err => {
        console.error(`Couldn't load translation file '${assetPath}'`, err);
        throw err;
      })
    );
  }
}

// Preserve this export exactly as it is
export const translocoScopes = {
  provide: TRANSLOCO_SCOPE,
  useValue: ['', 'countries', 'languages', 'signedLanguagesShort'],
};
