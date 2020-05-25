import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
