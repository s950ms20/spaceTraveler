import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { MyComment } from 'src/app/types/comment';
import { GetFirebaseDataService } from 'src/app/services/get-firebase-data.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  user: firebase.User;
  filteredComments: MyComment[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private fbData: GetFirebaseDataService
    ) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
    this.fbData.comments
    .subscribe((val: MyComment[]) => {
      const filtered = val.filter(v => v.authorId === this.user.uid);
      this.filteredComments = [];
      this.filteredComments = filtered;
    }
      );


  }



}
