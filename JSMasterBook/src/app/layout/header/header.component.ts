import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
   }

   switchLanguage(language: string ) {
        this.translate.use(language);
   }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset > 150) {
        document.querySelectorAll('.nav-top').forEach((c) => {
            c.classList.add('nav-smaller');
        });
    } else if ( scrollOffset < 150) {
      document.querySelectorAll('.nav-top').forEach((c) => {
            c.classList.remove('nav-smaller');
        });
    }
}

}
