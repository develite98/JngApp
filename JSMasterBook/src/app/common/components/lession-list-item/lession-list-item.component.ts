import { Component, OnInit, Input } from '@angular/core';
import { Lession } from '../../../shared/models/tutorial';

@Component({
  selector: 'app-lession-list-item',
  templateUrl: './lession-list-item.component.html',
  styleUrls: ['./lession-list-item.component.scss']
})
export class LessionListItemComponent implements OnInit {

  isShowIntro = false;

  // tslint:disable-next-line:no-input-rename
  @Input('data') lession: Lession;
  constructor() { }

  ngOnInit(): void {
  }

  isImageExist() {
    return this.lession.lessionImage != null ;
  }

}
