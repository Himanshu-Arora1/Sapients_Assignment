import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {

  val: any = new Subject();
  filterSelected: any = {'year': '', 'launch_success': '', 'land_success':''};
  constructor(private http: HttpClient) { }

  getMissionDetails() {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100");
  }

  getLaunches(status: string) {
    let params = new HttpParams();
    params = params.append('limit', '100');
    params = params.append('launch_success', status);
    return this.http.get("https://api.spacexdata.com/v3/launches", { params: params });
  }

  getLandings(status) {
    let params = new HttpParams();
    params = params.append('limit', '100');
    params = params.append('land_success', status);
    return this.http.get("https://api.spacexdata.com/v3/launches", { params: params });
  }

  getMissions(year: any) {
    let params = new HttpParams();
    params = params.append('limit', '100');
    params = params.append('launch_success', 'true');
    params = params.append('land_success', 'true');
    params = params.append('launch_year', year);
    return this.http.get("https://api.spaceXdata.com/v3/launches", { params: params });
  }

  getMissionsByYear(year: any) {
    let params = new HttpParams();
    params = params.append('limit', '100');
    params = params.append('launch_year', year);
    return this.http.get("https://api.spaceXdata.com/v3/launches", { params: params });
  }

  sendYear(year: string) {
    this.filterSelected.year=year
    this.filterSelected.launch_success = '';
    this.filterSelected.land_success = '';
    this.val.next(this.filterSelected);
  }

  sendLauchingStatus(launch: string) {
    this.filterSelected.year='';
    this.filterSelected.launch_success = launch;
    this.filterSelected.land_success = '';
    this.val.next(this.filterSelected);
  }

  sendLandingStatus(land:string) {
    this.filterSelected.year='';
    this.filterSelected.launch_success = '';
    this.filterSelected.land_success = land;
    this.val.next(this.filterSelected);
  }

}
