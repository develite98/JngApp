import { Component, OnInit, Input } from '@angular/core';
import { Tutorial, Lession } from 'src/app/shared/models/tutorial';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lession-list',
  templateUrl: './lession-list.component.html',
  styleUrls: ['./lession-list.component.scss']
})
export class LessionListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data') lessionList: Lession[];

  constructor(private translate: TranslateService) {
  }


  ngOnInit(): void {
  }

}
