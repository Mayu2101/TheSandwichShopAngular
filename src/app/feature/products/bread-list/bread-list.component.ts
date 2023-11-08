import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bread } from '../models/bread.model';
import { ProductsService } from '../products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-bread-list',
  templateUrl: './bread-list.component.html',
  styleUrls: ['./bread-list.component.scss'],
})
export class BreadListComponent implements OnInit {
  dataSource = new MatTableDataSource<Bread>([]);
  displayedColumns: string[] = ['description', 'action'];
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAllBreads()
      .pipe(take(1))
      .subscribe((bread: Bread[]) => {
        this.dataSource.data = bread;
        this.isLoading = false;
      });
  }
}
