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
  constructor(private tutService: TutorialsServiceService) { }

  ngOnInit(): void {
    this.tutService.getTutorial().subscribe(val => this.tutorial = val);
  }

  onClick() {
    console.log(this.tutorial);
  }
}
