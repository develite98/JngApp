import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialsServiceService } from 'src/app/shared/service/tutorials-service.service';
import { Tutorial, Lession } from 'src/app/shared/models/tutorial';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, filter, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit {
  isDetailPage = true;
  notShowSpinner = false;
  tutorial: Tutorial[];
  result: Tutorial;
  lessionList: Lession[];
  id: string;
  idOfTutorial = '';
  titOfTutorial = '';
  constructor(
    private location: Location,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private tutService: TutorialsServiceService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(val => {
      const id = val.get('id');
      this.id = id;
    });

    // tslint:disable-next-line:max-line-length
    this.http.get<Tutorial[]>('../../../assets/tutorials.json').subscribe(val => {
      setTimeout(() => {
          this.tutorial = val;
          this.result = this.tutorial.find(x => x.id === Number(this.id));
          this.titOfTutorial = this.result.title.toString();
          this.lessionList = this.result.lession;
          this.notShowSpinner = true;
        }, 1000);
    });
  }


  onBack() {
    this.location.back();
  }
}
