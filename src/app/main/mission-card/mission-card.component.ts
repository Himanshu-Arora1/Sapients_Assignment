import { Component, OnInit, Input } from '@angular/core';
import { SpacexDataService } from '../filter-spacex/spacex-data.service';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent implements OnInit {

  @Input() mission: any;

  constructor(private spacexService: SpacexDataService) { }

  ngOnInit() {
  }


}
