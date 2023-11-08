import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './models/item.model';
import { Topping } from './models/topping.model';
import { Bread } from './models/bread.model';
import { Size } from './models/size.model';
import { Combo } from './models/combo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = environment.apiUrl + '/Product';

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // Items Services
  getAllItems(): Observable<Item[]> {
    const fakeData = [
      { id: '1', description: 'Coke', category: 'Drink', price: 5.0 },
      { id: '2', description: 'Ice Cream', category: 'Dessert', price: 2.0 },
      {
        id: '3',
        description: 'Ham and Cheese',
        category: 'Sandwich',
        price: 15.0,
      },
    ];
    return of(fakeData); // TODO
  }

  getItem(id: string) {
    return of({ id: id, description: 'Coke', category: 'Drink' });
  }

  createItem(item: Item) {
    console.log(item); // TODO
  }

  updateItem(item: Item) {
    console.log(item); // TODO
  }

  // Bread Services
  getAllBreads(): Observable<Bread[]> {
    return this.httpClient.get<Bread[]>(`${this.apiUrl}/GetBreadTypes`, this.httpOptions)
  }

  getBread(id: string) {
    let params = new HttpParams().set('breadTypeId', id);
    return this.httpClient.get<Bread>(`${this.apiUrl}/GetBreadType`, {params: params, ...this.httpOptions})
  }

  createBread(bread: Bread) {
    bread.breadTypeId = '';
    return this.httpClient.post<Bread>(`${this.apiUrl}/AddBreadType`, bread, this.httpOptions)
  }

  updateBread(bread: Bread) {
    return this.httpClient.post<Bread>(`${this.apiUrl}/UpdateBreadType`, bread, this.httpOptions)
  }

  // Toppings Services
  getAllToppings(): Observable<Topping[]> {
    return this.httpClient.get<Topping[]>(`${this.apiUrl}/GetToppings`, this.httpOptions)
  }

  getTopping(id: string) {
    let params = new HttpParams().set('toppingId', id);
    return this.httpClient.get<Topping>(`${this.apiUrl}/GetTopping`, {params: params, ...this.httpOptions})
  }

  createTopping(topping: Topping) {
    topping.toppingId = '';
    return this.httpClient.post<Topping>(`${this.apiUrl}/AddTopping`, topping, this.httpOptions)
  }

  updateTopping(topping: Topping) {
    return this.httpClient.post<Topping>(`${this.apiUrl}/UpdateTopping`, topping, this.httpOptions)
  }

  // Sizes Services
  getAllSizes(): Observable<Size[]> {
    return this.httpClient.get<Size[]>(`${this.apiUrl}/GetSizes`, this.httpOptions)
  }

  getSize(id: string) {
    let params = new HttpParams().set('sizeId', id);
    return this.httpClient.get<Size>(`${this.apiUrl}/GetSize`, {params: params, ...this.httpOptions})
  }

  createSize(size: Size) {
    size.sizeId= '';
    return this.httpClient.post<Size>(`${this.apiUrl}/AddSize`, size, this.httpOptions)
  }

  updateSize(size: Size) {
    console.log(size)
    return this.httpClient.post<Size>(`${this.apiUrl}/UpdateSize`, size, this.httpOptions)
  }

  // Combos Services
  getAllCombos(): Observable<Combo[]> {
    return this.httpClient.get<Combo[]>(`${this.apiUrl}/GetCombos`, this.httpOptions)
  }

  getCombo(id: string) {
    let params = new HttpParams().set('comboId', id);
    return this.httpClient.get<Combo>(`${this.apiUrl}/GetCombo`, {params: params, ...this.httpOptions})
  }

  createCombo(combo: Combo) {
    combo.comboId= '';
    return this.httpClient.post<Combo>(`${this.apiUrl}/AddCombo`, combo, this.httpOptions)
  }

  updateCombo(combo: Combo) {
    return this.httpClient.post<Combo>(`${this.apiUrl}/UpdateCombo`, combo, this.httpOptions)
  }
}
