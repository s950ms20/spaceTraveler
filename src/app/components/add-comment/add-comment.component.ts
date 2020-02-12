import { Component, OnInit } from '@angular/core';
import { lorem } from 'src/app/tools/lorem';
import { MyComment } from 'src/app/types/comment';
import { GetFakeCommentsService } from 'src/app/services/getFakeComments/get-fake-comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  newComment = `${lorem}`;
  name = 'John Doe';
  email = 'jdoe@mail.com';

  constructor(
    private getFakeCommentsFromService: GetFakeCommentsService
  ) {  }

  ngOnInit() {
  }

  createNewCommentID = (): string => {
    return `NC${Math.floor(Math.random() * 123456789)}` ;
  }

  addNewComment = () => {
    const nc = new MyComment(
      this.name,
      this.email,
      this.createNewCommentID(),
      this.newComment
    );
    console.log(nc);
    this.getFakeCommentsFromService.addNewRealComment(nc);
  }


}
