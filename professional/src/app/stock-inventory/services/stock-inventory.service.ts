import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Item, Product} from "../models/product.interface";
import {catchError, map, Observable, tap, throwError} from "rxjs";


@Injectable()
export class StockInventoryService{


  constructor(private http: HttpClient) {
  }


  getCartItems(): Observable<Item[]>{
    return this.http.get<Item[]>('http://localhost:3000/cart');
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  checkBranchId(id: string): Observable<boolean> {
    const params = new HttpParams().set('id', id);

    return this.http.get<any[]>('http://localhost:3000/branches', { params })
      .pipe(
        tap(res => console.log('HTTP response:', res)),
        map(response => response.length > 0),
        catchError((error: any) => {
          console.error('HTTP error:', error);
          return throwError(() => new Error(error.message || 'Server error'));
        })
      );
  }
}
