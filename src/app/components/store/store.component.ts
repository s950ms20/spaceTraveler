import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



import { MarsData } from 'src/app/types/MarsData';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  readonly JSON_FAKE_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

  readonly MARS_ROVER_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';

  readonly API_KEY = 'M0ZtJFUbyPFRgbYUeISf76cp2sMHjYxiaAiqobcB';

  dataObservable: Observable<any>;
  data: MarsData[] = [];
  lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  catchError = (error: any) => console.log(error);

  // addData = (data: Observable<MarsData>) => {

  //   const newData = data;
  //   newData.photos.length = 36;
  //   newData.photos.map( ph => this.data.push(new MarsData(ph.id, ph.img_src)));
  //   console.log(this.data);
  // }

  constructor( private http: HttpClient) {  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const params = new HttpParams().set('sol', '16');
    const headers = new HttpHeaders().set('api_key', this.API_KEY);

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

  }
}
