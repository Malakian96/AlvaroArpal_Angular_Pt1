import { Component, OnInit, Input, Injectable } from '@angular/core';
import { IProducte } from '../interfaces/iproducte';
import { DadesProductesService } from '../service/dades-productes.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private producteService: DadesProductesService) {}
  listFilter = '';
  errorMessage: string = '';
  productes: IProducte[] = [];

  @Input() titolLlistat: string = '';

  ngOnInit(): void {
    console.log('Listat de productes inicialitzat');
    this.producteService.getDades().subscribe(
      (productes: Array<IProducte>) => {
        this.productes = productes;
        
      },
      (error) => {
        this.errorMessage = error.message; // treurem l'error a html
        
      }
    );
  }
}
