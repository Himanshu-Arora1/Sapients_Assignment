import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexDataService } from './spacex-data.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-spacex',
  templateUrl: './filter-spacex.component.html',
  styleUrls: ['./filter-spacex.component.css']
})
export class FilterSpacexComponent implements OnInit {

  years:Array<string> = ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]
  eleId: any;
  constructor(private spacexData: SpacexDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  launchStatus(event: any) {
    this.buttonClicked(event);
    this.router.navigate(['',event.target.value]);
    this.spacexData.sendLauchingStatus(event.target.value);
  }

  landingStatus(event: any) {
    this.buttonClicked(event);
    this.router.navigate(['',event.target.value]);
    this.spacexData.sendLandingStatus(event.target.value);
  }

  getMissions(event?: any) {
    this.buttonClicked(event);
    this.router.navigate(['',event.target.value]);
    this.spacexData.sendYear(event.target.value);
  }

  buttonClicked(event: any) {
    if(this.eleId){
      document.getElementById(this.eleId).style.backgroundColor= "#aee2ae";
    }
    this.eleId = event.target.attributes.id.value;
    document.getElementById(this.eleId).style.backgroundColor= "#66cc66";
  }

}
