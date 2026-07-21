import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../module/fair';
import { FairService } from '../../service/fair.service';
// 
@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.css']
})
export class FairsDashboardComponent implements OnInit {
  fairsArr:Ifairs[]=[]

  constructor(
    private _fairsService:FairService
  ) { }

  ngOnInit(): void {
    this.getFairsDetails()
  }


  getFairsDetails(){
    this._fairsService.fetchFairs()
    .subscribe({
      next:data=>{
        this.fairsArr=data
      },
      error:err=>{
        console.log(err);
      }
    })
  }

}
