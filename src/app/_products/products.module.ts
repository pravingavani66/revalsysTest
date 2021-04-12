import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IsUserLoggedInGuard } from "../models/isuser-loggedin.guard";
import { ProductService } from "./service/product.service";

@NgModule({
    imports: [
      RouterModule.forChild([
       
        {
          path: '',
          component: ProductDetailsComponent,
        children: [
                    { path: '', component: ProductListComponent ,canActivate: [IsUserLoggedInGuard]},
                  ],
        }
      ]),
      SharedModule,
    ],
    exports: [],
    declarations: [
    
    ProductDetailsComponent,
    
    ProductListComponent],
    providers: [ ProductService],
  })
  export class ProductsModule {}
  