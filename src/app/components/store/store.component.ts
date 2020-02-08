import { Component, OnInit } from '@angular/core';
import { MarsData } from 'src/app/types/MarsData';
import { GetDataService } from 'src/app/services/getData/get-data.service';
import { lorem } from 'src/app/tools/lorem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

 public data: MarsData[] = [];
 public lorem = lorem;

  constructor( private getDataFromService: GetDataService) {  }

  ngOnInit() {
   this.data =  this.getDataFromService.getData();
  }



}
