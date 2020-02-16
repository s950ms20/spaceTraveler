import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MyComment } from 'src/app/types/comment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument   } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetFakeCommentsService {

  readonly FAKE_COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments';
  commentsObservable: Observable<any>;
  commentsData: MyComment[] = [];

  constructor(
    private http: HttpClient,
    private db: AngularFirestore
    ) {     }

getFakeComments() {
  this.commentsData.length = 0;
  this.commentsObservable = this.http.get<any>(this.FAKE_COMMENTS_API_URL);
  this.commentsObservable.pipe(
    map(cm =>  cm.map(
      obj =>
      new MyComment(obj.name, obj.email, obj.id, obj.body, obj.postId)
      )
      ),
      map(cm => {
        for (let step = 0; step < 5; step++) {
    this.commentsData.push(cm[Math.floor(Math.random() * 499)]);
  }
        }
        ),

    catchError((err: any) => of (this.commentsObservable))
    ).
    subscribe();

  return this.commentsData;
}

addNewRealComment(newComment: MyComment)  {
  this.db.collection('Comments').doc(`${newComment.commentId}`).set({
    authorName: newComment.authorName,
    authorId: newComment.authorId,
    commentId: newComment.commentId,
    body: newComment.body,
    postId: newComment.postId
  });
}

}


