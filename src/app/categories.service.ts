import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Categories } from './Models/categories';
import { APIResponse } from './Models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private API_URL = "http://localhost:3000/api/categories";

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

  constructor(private http : HttpClient) { }

  getAllCategories(): Observable<APIResponse<Categories[]>>{
    return this.http.get<APIResponse<Categories[]>>(this.API_URL , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors([])));
  }

  getCategoryById(id:string): Observable<APIResponse<Categories>>{
    return this.http.get<APIResponse<Categories>>(this.API_URL + '/' + id , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Categories())));
  }

  createCategory(data:Categories): Observable<APIResponse<Categories>>{
    return this.http.post<APIResponse<Categories>>(this.API_URL, data , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Categories())));
  }

  updateCategory(id:string, data:Categories): Observable<APIResponse<Categories>>{
    return this.http.put<APIResponse<Categories>>(this.API_URL + '/' + id, data , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Categories())));
  }

  deleteCategory(id:string): Observable<APIResponse<Categories>>{
    return this.http.delete<APIResponse<Categories>>(this.API_URL + '/' + id , this.HTTP_HEADER).pipe(catchError(this._handleHttpErrors(new Categories())));
  }

}


