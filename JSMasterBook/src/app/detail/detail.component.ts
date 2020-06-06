import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../assets/tutImage/animation.json',
  };
    // tslint:disable-next-line:ban-types
  constructor(private translate: TranslateService) {
   }

   animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


  ngOnInit(): void {
  }

}
