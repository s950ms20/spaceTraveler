import { Component, OnInit, Input } from '@angular/core';
import { MyComment } from 'src/app/types/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() commentsData: MyComment[];

  constructor() { }

  ngOnInit() {
  }

}
