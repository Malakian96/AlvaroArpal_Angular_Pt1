import { ICategoria } from './icategoria';

export interface IProducte {
  id: number;
  brochure_filename: any;
  nom: string;
  descripcio: string;
  categoria: ICategoria;
  
}
