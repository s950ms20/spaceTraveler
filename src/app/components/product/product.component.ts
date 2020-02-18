import { Component, OnInit } from '@angular/core';
import { lorem } from 'src/app/tools/lorem';
import { MarsData } from 'src/app/types/MarsData';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/getData/get-data.service';
import { GetFakeCommentsService } from 'src/app/services/getFakeComments/get-fake-comments.service';
import { MyComment } from 'src/app/types/comment';
import { GetFirebaseDataService } from 'src/app/services/get-firebase-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public lorem =  lorem;
  public selectedData: MarsData;
  public paramsId: number;
  public commentsData: MyComment[] = [];

  constructor(
    private getDataFromService: GetDataService,
    private route: ActivatedRoute,
    private getFakeCommentsFromService: GetFakeCommentsService,
    private getFbData: GetFirebaseDataService,
    ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
   this.paramsId = Number(params.get('id'));
  });

   const data = this.getDataFromService.getData();
   this.selectedData = data.filter(dt => dt.id === this.paramsId)[0];

   const commentsData = this.getFakeCommentsFromService.getFakeComments();

   this.getFbData.comments
    .subscribe((val: MyComment[]) => {
      const preFiltered = val.filter(v => v.postId === this.paramsId);
      this.commentsData = [];
      this.commentsData = [ ...commentsData, ...preFiltered];
    }
      );

  }

}



