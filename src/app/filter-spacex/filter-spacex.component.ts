import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexDataService } from './spacex-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-spacex',
  templateUrl: './filter-spacex.component.html',
  styleUrls: ['./filter-spacex.component.css']
})
export class FilterSpacexComponent implements OnInit,OnDestroy {

  years:Array<string> = ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]
  missions: any;
  filterSelected: any = {'year': '', 'launch_success': 'true', 'land_success':'true'};
  subscription: Subscription;
  eleId: any;

  constructor(private spacexData: SpacexDataService) { }

  ngOnInit() {
    this.subscription = this.spacexData.getMissionDetails().subscribe(data => {
      this.missions = data;
    });
  }

  launchStatus(event: any) {
    this.ngOnDestroy();
    this.buttonClicked(event);
    this.filterSelected.launch_success = event.target.value;
    if(!this.filterSelected.year) {
      this.spacexData.getLaunches(this.filterSelected.launch_success).subscribe(data => {
        this.missions = data;
      });
    } else {
      this.getMissions();
    }

  }

  landingStatus(event: any) {
    this.ngOnDestroy();
    this.buttonClicked(event);
    this.filterSelected.land_success = event.target.value;
    if(!this.filterSelected.year) {
      this.spacexData.getLandings(this.filterSelected.land_success).subscribe(data => {
        this.missions = data;
      });
    } else {
      this.getMissions();
    }
  }

  getMissions(event?: any) {
    this.ngOnDestroy();
    if(event) {
      this.buttonClicked(event);
      this.filterSelected.year = event.target.value;
    }
    this.spacexData.getMissions(this.filterSelected).subscribe(data => {
      this.missions = data;
    });
  }

  buttonClicked(event: any) {
    if(this.eleId){
      document.getElementById(this.eleId).style.backgroundColor= "#aee2ae";
    }
    this.eleId = event.target.attributes.id.value;
    document.getElementById(this.eleId).style.backgroundColor= "#66cc66";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
