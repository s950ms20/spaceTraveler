import { Component, OnInit, Input } from '@angular/core';
import { ItemData } from '../../types/ItemData';
import { lorem } from 'src/app/tools/lorem';
import { MarsData } from 'src/app/types/MarsData';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GetDataService } from 'src/app/services/getData/get-data.service';
import { GetFakeCommentsService } from 'src/app/services/getFakeComments/get-fake-comments.service';
import { MyComment } from 'src/app/types/comment';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() dt: ItemData;

  public lorem =  lorem;
  public selectedData: MarsData;
  public paramsId: number;
  public commentsData: MyComment[] = [];

  constructor(
    private getDataFromService: GetDataService,
    private route: ActivatedRoute,
    private getFakeCommentsFromService: GetFakeCommentsService
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
   this.paramsId = Number(params.get('id'));
  });

    const data = this.getDataFromService.getData();
    this.selectedData = data.filter(dt => dt.id === this.paramsId)[0];

    this.commentsData = this.getFakeCommentsFromService.getFakeComments();
  }

}
