import { Component, OnInit, Input } from '@angular/core';
import { MarsData } from 'src/app/types/MarsData';
import { lorem } from 'src/app/tools/lorem';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  public lorem = lorem;

  @Input() dt: MarsData;

  constructor() { }

  ngOnInit() {
  }

}
