import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ItemData } from '../../types/ItemData';


interface MarsData {
  id: string;
  img: string;
}

class MarsData {
  constructor(id: string, img: string) {
    this.id = id;
    this.img = img;
  }
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  readonly JSON_FAKE_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

  readonly MARS_ROVER_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';

  readonly NASA_API_URL = 'https://images-api.nasa.gov/search?q=apollo%2011...';
  readonly API_KEY = 'M0ZtJFUbyPFRgbYUeISf76cp2sMHjYxiaAiqobcB';

  dataCollection: ItemData[] = [];
  data: MarsData[] = [];
  lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  addData = (data: any) => {
    data.collection.items.map(
      nd => {
        const img: string = nd.links[0].href;
        const id: string = nd.data[0].nasa_id;
        const title: string = nd.data[0].title;
        const created: string = nd.data[0].date_created;
        const description: string = nd.data[0].description;
        const keywords: string[] = nd.data[0].keywords;

        const newItem = new ItemData(img, id, title, created, description, keywords);
        this.dataCollection.push(newItem);
      }
    );
  }

  catchError = (error: any) => console.log(error);

  addPhotos = (data: any) => {

    const newData = data;
    newData.photos.length = 36;
    newData.photos.map( ph => this.data.push(new MarsData(ph.id, ph.img_src)));
    console.log(this.data);
  }

  constructor( private http: HttpClient) {  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const params = new HttpParams().set('q', 'apollo 16').set('media_type', 'image').set('title', 'moon');

    // this.http.get<any>(`${this.NASA_API_URL}?api_key=${this.API_KEY}`, {params} )
    // .subscribe(this.addData.bind(this), this.catchError.bind(this));

    this.http.get<any>(`${this.MARS_ROVER_API_URL}&sol=16&api_key=${this.API_KEY}`)
    .subscribe(this.addPhotos.bind(this), this.catchError.bind(this));

  }
}
