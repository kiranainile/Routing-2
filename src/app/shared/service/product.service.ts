import { Injectable } from "@angular/core";
// import { Iproduct, Ires } from "../models/products";
import { Observable, of } from "rxjs";
import { Iproduct, Ires } from "../module/products";




@Injectable({
    providedIn:'root'
})

export class ProductService{

    productsArr :Array <Iproduct>=[
        {
            pname:'Samsung M31',
            pid:'123',
          pstatus:'In-progress',

            canReturn:1

        },
         {
            pname:'Iphone M31',
            pid:'124',
           pstatus:'Dispatched',

            canReturn:1

        },
         {
            pname:'samsun tv',
            pid:'125',
            pstatus:'Delivered',
            canReturn:0

        },
         {
            pname:'Iphone 15',
            pid:'126',
          pstatus:'In-progress',

            canReturn:0

        },
    ]

    constructor(){}
    
    fetchProducts():Observable<Iproduct[]>{
        return of( this.productsArr)                   // api mock kiya
    }


    fetchProductById(id:string):Observable <Iproduct>{
        let productobj =this.productsArr.find(p=> p.pid ===id)!
        return of(productobj)
    }
    createProduct(product:Iproduct):Observable<Ires<Iproduct>>{
        this.productsArr.push(product)
          console.log(this.productsArr);
        return of({
            msg:`The new product with id ${product.pid}}is created successfully`,
            data:product
        })

    }
    updateProduct(product:Iproduct):Observable<Ires<Iproduct>>{
        let getIndex=this.productsArr.findIndex(p => p.pid===product.pid)
        // let success=Math.random() >.5 ?true:false
        this.productsArr[getIndex]=product
        return of({
              msg:`The new product with id ${product.pid}}is updated successfully`,
            data:product

        })



    }
    
        removeProductid(id:string):Observable<Ires<Iproduct>>{
            let getIndex=this.productsArr.findIndex(p=>p.pid ===id)
            let product=this.productsArr.splice(getIndex,1)
            return of({
                   msg:`The new product with id ${product[0].pid} is removed successfully....!!!`,
           
                   data:product[0]

            })

        }
            
    
}