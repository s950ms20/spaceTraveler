import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { MarsData } from 'src/app/types/MarsData';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  readonly MARS_ROVER_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
  readonly API_KEY = 'M0ZtJFUbyPFRgbYUeISf76cp2sMHjYxiaAiqobcB';

  dataObservable: Observable<any>;
  data: MarsData[] = [];

  constructor( private http: HttpClient) {  }

  getData() {
    this.dataObservable = this.http.get<any>(`${this.MARS_ROVER_API_URL}&sol=16&api_key=${this.API_KEY}`);
    this.dataObservable.pipe(
      map(dt  =>  dt.photos.map(
        ph => (new MarsData(ph.id, ph.img_src, ph.camera.full_name, ph.rover.name, ph.earth_date))
        )
              ),
              map((dt: MarsData[]) => dt.slice(0, 48)),
              map(dt => dt.map((obj) => this.data.push(obj))),
              catchError((err: any) => of (this.dataObservable))
    )
    .subscribe();

    return this.data;
  }

}
