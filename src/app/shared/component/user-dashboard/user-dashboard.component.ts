import { Component, OnInit } from '@angular/core';
import { IUser } from '../../module/users';
import { UserService } from '../../service/user.service';
import { SnackBarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userArr!: Array<IUser>;

  constructor(
    private _userService: UserService,
    private _snackbar: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.fetchUser()
      .subscribe({
        next: (data) => {
          this.userArr = data;
        },
        error: (err) => {
          
          this._snackbar.openSnackBar('err');
        }
      });
  }
}