import { Component, OnInit, Input } from '@angular/core';
import { lorem } from 'src/app/tools/lorem';
import { MyComment } from 'src/app/types/comment';
import { GetFakeCommentsService } from 'src/app/services/getFakeComments/get-fake-comments.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MarsData } from 'src/app/types/MarsData';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() dt: MarsData;
  newComment = '';
  user: firebase.User;

  constructor(
    private getFakeCommentsFromService: GetFakeCommentsService,
    private auth: AuthService
  ) {  }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
    });

  }

  createNewCommentID = (): string => {
    return `NC${Math.floor(Math.random() * 123456789)}` ;
  }

  addNewComment = () => {
    const nc = new MyComment(
      this.user.displayName,
      this.user.uid,
      this.createNewCommentID(),
      this.newComment,
      this.dt.id
    );
    this.getFakeCommentsFromService.addNewRealComment(nc);
  }


}
