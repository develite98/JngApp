import { Component, OnInit } from '@angular/core';
import { TutorialsServiceService } from '../../shared/service/tutorials-service.service';
import { Tutorial } from '../../shared/models/tutorial';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {
  tutorial: Tutorial[];
  notShowSpinner = false;
  constructor(private tutService: TutorialsServiceService) { }

  ngOnInit(): void {
    this.tutService.getTutorial().subscribe(val => {
      setTimeout(() => {
        this.tutorial = val;
        this.notShowSpinner = true;
      }, 1500);
    });
  }

  onClick() {
    console.log(this.tutorial);
  }
}
