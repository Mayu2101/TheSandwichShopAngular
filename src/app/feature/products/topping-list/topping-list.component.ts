import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Topping } from '../models/topping.model';
import { ProductsService } from '../products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss'],
})
export class ToppingListComponent {
  dataSource = new MatTableDataSource<Topping>([]);
  displayedColumns: string[] = ['description', 'price', 'action'];
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAllToppings()
      .pipe(take(1))
      .subscribe((topping: Topping[]) => {
        this.dataSource.data = topping;
        this.isLoading = false;
      });
  }
}
