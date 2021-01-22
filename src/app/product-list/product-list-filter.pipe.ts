import { Pipe, PipeTransform } from '@angular/core';
import { IProducte } from '../interfaces/iproducte';

@Pipe({ name: 'productListFilter' })
export class ProductListFilterPipe implements PipeTransform {
  transform(productes: IProducte[], filterBy: string): IProducte[] {
    filterBy = filterBy ? filterBy.toLowerCase() : '';
    return filterBy
      ? productes.filter((producte) => {
          return producte.nom.toLowerCase().indexOf(filterBy) !== -1 ||producte.categoria.nom.toLowerCase().indexOf(filterBy) !== -1;
        })
      : productes;
  }
}
