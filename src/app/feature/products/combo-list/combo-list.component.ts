import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Combo } from '../models/combo.model';
import { ProductsService } from '../products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.scss'],
})
export class ComboListComponent {
  dataSource = new MatTableDataSource<Combo>([]);
  displayedColumns: string[] = ['description', 'action'];
  isLoading = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAllCombos()
      .pipe(take(1))
      .subscribe((combo: Combo[]) => {
        this.dataSource.data = combo;
        this.isLoading = false;
      });
  }
}
