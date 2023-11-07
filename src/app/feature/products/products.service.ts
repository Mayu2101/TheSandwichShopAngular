import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  apiUrl = environment.apiUrl + '/products/';

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
    const fakeData = [
      { id: '1', description: 'White' },
      { id: '2', description: 'Brown' },
      { id: '3', description: 'Rye' },
    ];
    return of(fakeData); // TODO
  }

  getBread(id: string) {
    return of({ id: id, description: 'White Bread' });
  }

  createBread(bread: Bread) {
    console.log(bread); // TODO
  }

  updateBread(bread: Bread) {
    console.log(bread); // TODO
  }

  // Toppings Services
  getAllToppings(): Observable<Topping[]> {
    const fakeData = [
      { id: '1', description: 'Ham', price: 5.0 },
      { id: '2', description: 'Cheese', price: 6.0 },
      { id: '3', description: 'Tomato', price: 7.0 },
    ];
    return of(fakeData); // TODO
  }

  getTopping(id: string) {
    return of({ id: id, description: 'Ham', price: 5.0 });
  }

  createTopping(topping: Topping) {
    console.log(topping); // TODO
  }

  updateTopping(topping: Topping) {
    console.log(topping); // TODO
  }

  // Sizes Services
  getAllSizes(): Observable<Size[]> {
    const fakeData = [
      { id: '1', description: '250ml', extraCost: 0.0 },
      { id: '2', description: '500ml', extraCost: 5.0 },
    ];
    return of(fakeData); // TODO
  }

  getSize(id: string) {
    return of({ id: id, description: '250ml', extraCost: 0.0 });
  }

  createSize(size: Size) {
    console.log(size); // TODO
  }

  updateSize(size: Size) {
    console.log(size); // TODO
  }

  // Combos Services
  getAllCombos(): Observable<Combo[]> {
    const fakeData = [
      { id: '1', description: 'My Combo 1' },
      { id: '2', description: 'Cheesy Cheese' },
    ];
    return of(fakeData); // TODO
  }

  getCombo(id: string) {
    return of({ id: id, description: 'My Combo 1' });
  }

  createCombo(combo: Combo) {
    console.log(combo); // TODO
  }

  updateCombo(combo: Combo) {
    console.log(combo); // TODO
  }
}
