import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { IUser } from 'src/app/shared/module/users';
import { UserService } from 'src/app/shared/service/user.service';
import { SnackBarService } from 'src/app/shared/service/snackbar.service';
import { GetConfirmationComponent } from '../../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  UserDetails!: IUser;
  userId!: string;

  constructor(
    private _routes: ActivatedRoute,
    private _userService: UserService,
    private _snackbar: SnackBarService,
    private _router: Router,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this._routes.paramMap.subscribe(params => {

      const id = params.get('userId');

      if (id) {
        this.userId = id;

        this._userService.fetchUserById(this.userId).subscribe({
          next: (data) => {
            this.UserDetails = data;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }

    });
  }

  onRemoveUser() {

    const matConfig = new MatDialogConfig();

    matConfig.width = '400px';
    matConfig.disableClose = true;
    matConfig.data = `Are you sure you want to remove the User with id ${this.userId}?`;

    const matRef = this._matDialog.open(GetConfirmationComponent, matConfig);

    matRef.afterClosed().subscribe(result => {

      if (result) {
        this._userService.removeUserById(this.userId).subscribe({
          next: (res) => {
            this._snackbar.openSnackBar(res.msg);
            this._router.navigate(['/users']);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }

    });

  }

}