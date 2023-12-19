import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GammesComponent } from './gammes/gammes.component';
import { ProduitsComponent } from './produits/produits.component';
import { RapportComponent } from './rapport/rapport.component';
import { CommandesComponent } from './commandes/commandes.component';
import { StockComponent } from './stock/stock.component';
import { AchatComponent } from './achat/achat.component';
import { StatistiquesProduitsComponent } from './statistiques-produits/statistiques-produits.component';
import { ClientsComponent } from './clients/clients.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ParametresComponent } from './parametres/parametres.component';
import { FamilleComponent } from './famille/famille.component';
import { ModifiergammeComponent } from './modifiergamme/modifiergamme.component';
import { AjoutergammesComponent } from './ajoutergammes/ajoutergammes.component';
import { AjouterFamilleComponent } from './ajouter-famille/ajouter-famille.component';
import { ModifierFamilleComponent } from './modifier-famille/modifier-famille.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ModifierproduitComponent } from './modifierproduit/modifierproduit.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AjouterFournisseurComponent } from './ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseurComponent } from './modifier-fournisseur/modifier-fournisseur.component';
import { AddutilisateurComponent } from './addutilisateur/addutilisateur.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    SidenavComponent,
    GammesComponent,
    ProduitsComponent,
    RapportComponent,
    CommandesComponent,
    StockComponent,
    AchatComponent,
    StatistiquesProduitsComponent,
    ClientsComponent,
    FournisseursComponent,
    UtilisateursComponent,
    ParametresComponent,
    FamilleComponent,
    ModifiergammeComponent,
    AjoutergammesComponent,
    AjouterFamilleComponent,
    ModifierFamilleComponent,
    AjouterProduitComponent,
    ModifierproduitComponent,
    ModifierCommandeComponent,
    AjouterClientComponent,
    ModifierClientComponent,
    AjouterUtilisateurComponent,
    ListeUtilisateurComponent,
    ModifierUtilisateurComponent,
    AjouterFournisseurComponent,
    ModifierFournisseurComponent,
    AddutilisateurComponent,
    ImageUploadComponent
  ],
    imports: [
      HttpClientModule,
      FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
