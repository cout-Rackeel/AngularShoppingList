import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Items } from './Models/items';
import { APIResponse } from './Models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  private API_URL = "http://localhost:3000/api/items";

  private HTTP_HEADER = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  private _handleHttpErrors(retVal: any) {
    return (err: any) => {
      console.log(err);
      return of({status:err.status, message:err.message, data:retVal});
    }
  }

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<APIResponse<Items[]>>{
    return this.http.get<APIResponse<Items[]>>(this.API_URL , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors([])));
  }

  getItemById(id:string): Observable<APIResponse<Items>>{
    return this.http.get<APIResponse<Items>>(this.API_URL + '/' + id , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Items())));
  }

  createItem(data:Items): Observable<APIResponse<Items>>{
    return this.http.post<APIResponse<Items>>(this.API_URL, data , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Items())));
  }

  updateItem(id:string, data:Items): Observable<APIResponse<Items>>{
    return this.http.put<APIResponse<Items>>(this.API_URL + '/' + id, data , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Items())));
  }

  deleteItem(id:string): Observable<APIResponse<Items>>{
    return this.http.delete<APIResponse<Items>>(this.API_URL + '/' + id , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Items())));
  }
}
