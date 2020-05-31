import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lession-list-item',
  templateUrl: './lession-list-item.component.html',
  styleUrls: ['./lession-list-item.component.scss']
})
export class LessionListItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
