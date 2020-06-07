import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: AnimationOptions = {
  path: '../../assets/tutImage/home-animation.json',
  };

  options2: AnimationOptions = {
    path: '../../assets/tutImage/home-animation-2.json',
    };

  constructor(private translate: TranslateService) {
   }

  animationCreated(animationItem: AnimationItem): void {
    console.log('');
  }

  ngOnInit(): void {
  }

}
