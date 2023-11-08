import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Size } from '../models/size.model';
import { ProductsService } from '../products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.scss'],
})
export class SizeListComponent {
  dataSource = new MatTableDataSource<Size>([]);
  displayedColumns: string[] = ['description', 'extraCost', 'action'];
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAllSizes()
      .pipe(take(1))
      .subscribe((size: Size[]) => {
        this.dataSource.data = size;
        this.isLoading = false;
      });
  }
}
