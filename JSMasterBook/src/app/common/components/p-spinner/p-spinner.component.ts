import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-p-spinner',
  templateUrl: './p-spinner.component.html',
  styleUrls: ['./p-spinner.component.scss']
})
export class PSpinnerComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('ShowSpinner') isShowSpinner = false;
  constructor() { }

  ngOnInit(): void {
  }

}
