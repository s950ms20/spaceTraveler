import { Component, OnInit, Input } from '@angular/core';
import { ItemData } from '../../types/ItemData';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() dt: ItemData;

  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor() { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.products.forEach((p: Product) => {
    //     if (p.id == params.id) {
    //       this.product = p;
    //     }
    //   });
    // });
  }

}
