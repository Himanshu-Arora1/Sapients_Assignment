import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {

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

  getMissions(filters: any) {
    let params = new HttpParams();
    params = params.append('limit', '100');
    params = params.append('launch_success', filters.launch_success);
    params = params.append('land_success', filters.land_success);
    params = params.append('launch_year', filters.year);
    return this.http.get("https://api.spaceXdata.com/v3/launches", { params: params });
  }

  getMissionsByYear(filters: any) {
    let params = new HttpParams();
    params = params.append('limit', '100');
    params = params.append('launch_year', filters.year);
    return this.http.get("https://api.spaceXdata.com/v3/launches", { params: params });
  }

}
