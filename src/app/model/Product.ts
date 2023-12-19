import {Famille} from "./Famille";
import {Categorie} from "./Categorie";
import {Fournisseur} from "./Fournisseur";

export class Product{
  id!:number;
  nom!:string;
  prix!:any;
  packaging!:string;
  photoName!:string;
  stockMinimal!:number;
  qte!:number;
  famille!:Famille;
  categorie!:Categorie;
  fournisseur!:Fournisseur;
  stockFinale!:number;
}
