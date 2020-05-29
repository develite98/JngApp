import { Component, OnInit, Input } from '@angular/core';
import { Tutorial } from '../../../shared/models/tutorial';

@Component({
  selector: 'app-tutorial-card-info',
  templateUrl: './tutorial-card-info.component.html',
  styleUrls: ['./tutorial-card-info.component.scss']
})
export class TutorialCardInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('data') tutorial: Tutorial;
  // tslint:disable-next-line:no-input-rename
  @Input('isDetailPage') isDetailPage = false;
  constructor() { }

  ngOnInit(): void {
  }

}
