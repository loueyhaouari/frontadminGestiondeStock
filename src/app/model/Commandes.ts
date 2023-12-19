import {LigneCommande} from "./LigneCommande";
import {Utilisateur} from "./Utilisateur";

export class Commandes{
  id!:string;
  date!:Date;
  // cartItems!:CartItems[];
  ligneCommande!:LigneCommande[];
  prixCommande!:number;
  etat!:string;
}
