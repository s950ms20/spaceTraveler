import { Injectable } from '@angular/core';
import { MyComment } from 'src/app/types/comment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetFirebaseDataService {
  private fbCommentsCollection: AngularFirestoreCollection<MyComment>;
  comments: Observable<MyComment[]>;

  constructor(private fbData: AngularFirestore) {
    this.fbCommentsCollection = fbData.collection<MyComment>('Comments');
    this.comments = this.fbCommentsCollection.valueChanges();
   }

  }
