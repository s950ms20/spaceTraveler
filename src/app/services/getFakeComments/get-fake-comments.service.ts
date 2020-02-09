import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MyComment } from 'src/app/types/comment';

@Injectable({
  providedIn: 'root'
})
export class GetFakeCommentsService {


  readonly FAKE_COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  commentsObservable: Observable<any>;
  commentsData: MyComment[] = [];


  constructor(private http: HttpClient) { }

getFakeComments() {
  this.commentsData.length = 0;
  this.commentsObservable = this.http.get<any>(this.FAKE_COMMENTS_API_URL);
  this.commentsObservable.pipe(
    map(cm =>  cm.map(
      obj =>
      new MyComment(obj.name, obj.email, obj.id, obj.body)
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
  this.commentsData.push(newComment);
}


}


