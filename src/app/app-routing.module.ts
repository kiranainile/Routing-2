import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeDashboardComponent } from "./shared/component/home-dashboard/home-dashboard.component";
import { UserDashboardComponent } from "./shared/component/user-dashboard/user-dashboard.component";
import { ProductsDashboardComponent } from "./shared/component/products-dashboard/products-dashboard.component";
import { FairsDashboardComponent } from "./shared/component/fairs-dashboard/fairs-dashboard.component";
import { ProductComponent } from "./shared/component/products-dashboard/product/product.component";
import { ProductFormComponent } from "./shared/component/products-dashboard/product-form/product-form.component";
import { UserFormComponent } from "./shared/component/user-dashboard/user-form/user-form.component";
import { UserDetailsComponent } from "./shared/component/user-dashboard/user-details/user-details.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";



//http://localhost:4200 //baseurl
const routes: Routes= [
    {
        path:'home',//http://localhost:4200
        component:HomeDashboardComponent
    },
    {
        path:'',
       redirectTo:'home',
       pathMatch:'full'
    },
   
     {
        path:'users',
        component:UserDashboardComponent,
        children:[{

             
        path:'addUser',
        component:UserFormComponent
    },
     {
        path:':userId',
        component:UserDetailsComponent
    },
     {
        path:':userId/edit',    ///edit mode mai hoga
        component:UserFormComponent
    },
        ]
    },
    
    {
        path:'products',
        component:ProductsDashboardComponent,
        children:[

{
        path:'addproduct',
        component:ProductFormComponent
    },
     {
        path:':productId',
        component:ProductComponent
    },

     {
        path:':productId/edit',
        component:ProductFormComponent
    },

        ]
    },
    
     
    {
        path:'fairs',
        component:FairsDashboardComponent
    },
  
   
{
    path:'page-not-found',
    component:PageNotFoundComponent

},
{
    path:'**',
    redirectTo:'page-not-found'
}







    
]
@NgModule({ 
    imports:[RouterModule.forRoot(routes)] ,
    exports:[RouterModule] 

})


export class AppRoutingModule{


}

