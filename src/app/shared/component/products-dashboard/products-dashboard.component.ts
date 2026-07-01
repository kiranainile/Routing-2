import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../module/products';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

  products :Array<Iproduct>=[]             //products ka Array

  constructor(private _productService :ProductService

  ) { }

  ngOnInit(): void {
    this._productService.fetchProducts()
    .subscribe({
      next:data=>{
        this.products=data
      },
      error:err =>{
        console.log(err);
      }
    })
  }

}
