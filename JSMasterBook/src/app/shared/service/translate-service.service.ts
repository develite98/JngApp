import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceService {

  constructor(public translates: TranslateService) {
    translates.setDefaultLang('en');
    translates.use('en');
   }



   public switchLanguage(language: string ) {
    this.translates.use(language);
    }
}
