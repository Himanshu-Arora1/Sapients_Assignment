import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpacexDataService } from './filter-spacex/spacex-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private subscription:Subscription;
  missions: any;
  constructor(private spacexData: SpacexDataService, private router: Router) { }

  ngOnInit() {
    this.spacexData.getMissionDetails().subscribe(data => {      
      this.missions = data;
    });

    this.spacexData.val.subscribe((filter) =>{
      if(filter.year) {
        this.spacexData.getMissionsByYear(filter.year).subscribe(missions => {
          this.missions = missions;
        });
      }
      if(filter.launch_success) {
        this.spacexData.getLaunches(filter.launch_success).subscribe(missions => {
          this.missions = missions;
        });
      }
      if(filter.land_success) {
        this.spacexData.getLandings(filter.land_success).subscribe(missions => {
          this.missions = missions;
        });
      }

    })
  }

}
