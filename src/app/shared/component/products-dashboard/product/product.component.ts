import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
// import { Iproduct } from 'src/app/shared/models/products';
// import { ProductService } from 'src/app/shared/services/products.service';
// import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { GetConfirmationComponent } from '../../get-confirmation/get-confirmation.component';
import { Iproduct } from 'src/app/shared/module/products';
import { ProductService } from 'src/app/shared/service/product.service';
import { SnackBarService } from 'src/app/shared/service/snackbar.service';
// import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId!: string;
  productobj!: Iproduct;

  constructor(
    private _routes: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router,
    private _snackBar: SnackBarService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {

    this._routes.params.subscribe(param => {
      console.log(param);
      this.productId = param['productId'];

      if (this.productId) {
        this._productService.fetchProductById(this.productId)
          .subscribe({
            next: (data) => {
              this.productobj = data;
            },
            error: (err) => {
              console.log(err);
            }
          });
      }
    });
  }

  onRemove() {

    let matConfig = new MatDialogConfig();

    matConfig.width = '400px';
    matConfig.disableClose = true;
    matConfig.data = `Are you sure, you want to remove the Product with id ${this.productId}?`;
    let matRef=this._matDialog.open(GetConfirmationComponent,matConfig)
    matRef.afterClosed()
    .subscribe(res=>{
      if(res){
        this._productService.removeProductid(this.productId)
        .subscribe({
          next:res=>{
            this._snackBar.openSnackBar(res.msg)
            this._router.navigate(['products'])
          },
          error:err=>{
            console.log(err)
          }
        })
      }
    })
    

    }
    

    

  }
