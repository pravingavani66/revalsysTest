import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  sampleData = 'assets/sampleData.json';

getData(): Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this.sampleData);
}
getdata():Observable<any>{  
  return this.http.get<IProduct[]>(this.sampleData);
}  
}