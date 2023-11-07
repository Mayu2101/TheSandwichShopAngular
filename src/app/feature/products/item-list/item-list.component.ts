import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../models/item.model';
import { ProductsService } from '../products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  dataSource = new MatTableDataSource<Item>([]);
  displayedColumns: string[] = ['id', 'description', 'action'];
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAllItems()
      .pipe(take(1))
      .subscribe((item: Item[]) => {
        this.dataSource.data = item;
        this.isLoading = false;
      });
  }
}
