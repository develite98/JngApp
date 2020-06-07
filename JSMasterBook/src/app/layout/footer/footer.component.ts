import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset > 120) {
        document.querySelectorAll('.footer-bar').forEach((c) => {
            c.classList.add('show-footer');
        });
    } else if ( scrollOffset < 120) {
      document.querySelectorAll('.footer-bar').forEach((c) => {
            c.classList.remove('show-footer');
        });
    }
}

}
