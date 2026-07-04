import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/module/users';
import { UserService } from 'src/app/shared/service/user.service';
// import { IUser } from 'src/app/shared/models/user';
// import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  UserDetails!:IUser
  userId!:string

  constructor(
    private _routes:ActivatedRoute,
    private _userService:UserService


  ) { }

  ngOnInit(): void {

     this.fetchUserDetails()

  }

  fetchUserDetails(){
     this.userId=this._routes.snapshot.paramMap.get('userId')!
     if(this.userId){
      this._userService.fetchUserById(this.userId)
      .subscribe({
        next:Data=>{
          this.UserDetails=Data;
        },
        error:err=>{
          //snackbar
        }
      })
     }
  }
  }
    

