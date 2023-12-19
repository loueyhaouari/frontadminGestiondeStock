import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import {GammesComponent} from "./gammes/gammes.component";
import {FamilleComponent} from "./famille/famille.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {RapportComponent} from "./rapport/rapport.component";
import {StockComponent} from "./stock/stock.component";
import {AchatComponent} from "./achat/achat.component";
import {StatistiquesProduitsComponent} from "./statistiques-produits/statistiques-produits.component";
import {ClientsComponent} from "./clients/clients.component";
import {FournisseursComponent} from "./fournisseurs/fournisseurs.component";
import {UtilisateursComponent} from "./utilisateurs/utilisateurs.component";
import {ParametresComponent} from "./parametres/parametres.component";
import {ProduitsComponent} from "./produits/produits.component";
import {ModifiergammeComponent} from "./modifiergamme/modifiergamme.component";
import {AjoutergammesComponent} from "./ajoutergammes/ajoutergammes.component";
import {AjouterFamilleComponent} from "./ajouter-famille/ajouter-famille.component";
import {ModifierFamilleComponent} from "./modifier-famille/modifier-famille.component";
import {AjouterProduitComponent} from "./ajouter-produit/ajouter-produit.component";
import {ModifierproduitComponent} from "./modifierproduit/modifierproduit.component";
import {ModifierCommandeComponent} from "./modifier-commande/modifier-commande.component";
import {AjouterClientComponent} from "./ajouter-client/ajouter-client.component";
import {ModifierClientComponent} from "./modifier-client/modifier-client.component";
import {AjouterUtilisateurComponent} from "./ajouter-utilisateur/ajouter-utilisateur.component";
import {ListeUtilisateurComponent} from "./liste-utilisateur/liste-utilisateur.component";
import {ModifierUtilisateurComponent} from "./modifier-utilisateur/modifier-utilisateur.component";
import {AjouterFournisseurComponent} from "./ajouter-fournisseur/ajouter-fournisseur.component";
import {ModifierFournisseurComponent} from "./modifier-fournisseur/modifier-fournisseur.component";
import {AddutilisateurComponent} from "./addutilisateur/addutilisateur.component";
import {ImageUploadComponent} from "./image-upload/image-upload.component";

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'gammes',component:GammesComponent},
  {path:'user',component:UserComponent},
  {path:'famille',component:FamilleComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'commandes',component:CommandesComponent},
  {path:'rapport',component:RapportComponent},
  {path:'stock',component:StockComponent},
  {path:'achat',component:AchatComponent},
  {path:'statistique',component:StatistiquesProduitsComponent},
  {path:'client',component:ClientsComponent},
  {path:'fournisseur',component:FournisseursComponent},
  {path:'utilisateur',component:UtilisateursComponent},
  {path:'parametre',component:ParametresComponent},
  {path:'modifiergammes/:id',component:ModifiergammeComponent},
  {path:'ajoutergammes',component:AjoutergammesComponent},
  {path:'ajouterFamille',component:AjouterFamilleComponent},
  {path:'modifierFamille/:id',component:ModifierFamilleComponent},
  {path:'ajouterProduit',component:AjouterProduitComponent},
  {path:'modifierProduit/:id',component:ModifierproduitComponent},
  {path:'modifierCommande/:id',component:ModifierCommandeComponent},
  {path:'ajouterClient',component:AjouterClientComponent},
  {path:'modifierClient/:id',component:ModifierClientComponent},
  {path:'ajouterUtilisateur',component:AjouterUtilisateurComponent},
  {path:'listeUtilisateur',component:ListeUtilisateurComponent},
  {path:'modifierUtilisateur/:id',component:ModifierUtilisateurComponent},
  {path:'ajouterFournisseur',component:AjouterFournisseurComponent},
  {path:'modifierFournisseur/:id',component:ModifierFournisseurComponent},
  {path:'addUtilisateur',component:AddutilisateurComponent},
  {path:'upload',component:ImageUploadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
