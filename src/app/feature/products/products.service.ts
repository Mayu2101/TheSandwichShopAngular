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
  getAllItems() {
    const fakeData = [
      { id: '1', description: 'Coke', type: 'Drink' },
      { id: '2', description: 'Ice Cream', type: 'Dessert' },
      { id: '3', description: 'Ham and Cheese', type: 'Sandwich' },
    ];
    return of(fakeData); // TODO
  }

  getItem(id: string) {
    return of({ id: id, description: 'Coke', type: 'Drink' });
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
      { id: '1', description: 'Ham' },
      { id: '2', description: 'Cheese' },
      { id: '3', description: 'Tomato' },
    ];
    return of(fakeData); // TODO
  }

  getTopping(id: string) {
    return of({ id: id, description: 'Ham' });
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
      { id: '1', description: '250ml' },
      { id: '2', description: '500ml' },
    ];
    return of(fakeData); // TODO
  }

  getSize(id: string) {
    return of({ id: id, description: '250ml' });
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
