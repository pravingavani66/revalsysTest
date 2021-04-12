import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  totalProducts; 
  allProducts: IProduct[]=[];
  products: IProduct[];
  array;
  arr=[];
  sum = 12;
  throttle = 36;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  start: number = 0;
  end;
  

  constructor( private productService:ProductService, private changeDetectorRef: ChangeDetectorRef,private http: HttpClient) {  
   
    this.getDATA().subscribe(data => {
      this.products = data
    this.addItems(0, this.sum);
  });
  }
  ngOnInit(): void {
 
  }
  public getDATA(): Observable<any> {
    return this.http.get("./assets/sampleData.json");
}
 
  addItems(startIndex, endIndex) {
    this.end=endIndex; 
    if(this.products.length>=endIndex){  
      
      this.products = this.products.sort((low, high) => high.Price - low.Price);
      for (let i = startIndex; i < endIndex; ++i) {
      this.allProducts.push(this.products[i])
      this.changeDetectorRef.markForCheck()

      }
    }
  }
  onScrollDown() {
   
    const start = this.sum;
    this.sum += 12;
    this.addItems(start, this.sum);
    this.direction = "down";
  }
 
  sort(event){
  switch (event.target.value) {
    case "HighToLow":
      {
        this.products = this.products.sort((low, high) => low.Price - high.Price);
        break;
      }

    case "LowToHigh":
      {
        this.products = this.products.sort((low, high) => high.Price - low.Price);
        break;
      }
    }
    return this.products;
  }
}
