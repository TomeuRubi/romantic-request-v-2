import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Card } from '../../models/card';
import { IUser } from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryApi: string = 'http://localhost:10010/api/category';

  private defaultCategories: Array<Category> = [
    {id: 1, name: 'BDSM' }, {id: 2, name: 'SOFT' }];

  constructor(private http: HttpClient) { }


  getUserCard(user: IUser): Observable<Array<Category>> {
    return this.http.get<Category[]>(this.categoryApi);
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.categoryApi);
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(this.categoryApi+"/"+categoryId);
  }

  saveCategory(category: Category): Observable<any> {
    return this.http.post(this.categoryApi, category);
  }

  getCategories(user: IUser): Observable<Array<Category>> {
    return of(this.defaultCategories);
  }
  getTestCategories(): Observable<Array<Category>> {
    return of(this.defaultCategories);
  }
}
