import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  public nbclient:any;
  public nbcommande:any;
  public nbattente:any;
  public nblivraison:any;
  public nbannule:any;
  public nbfinalise:any;
  public nbcours:any;
  constructor(private adminService:AdminServiceService) {
  }
  ngOnInit(): void {
  this.nbreClient();
  this.nbreCommande()
  this.nbreCommandeAttente();
  this.nbreCommandeLivraison();
  this.nbreCommandeAnnule();
  this.nbreCommandeFinalisée();
  this.nbreCommandeCours();
  }
nbreClient() {
    this.adminService.getnbClient().subscribe({
      next:(data)=>{
        this.nbclient=data;
      }
    })
}
nbreCommandeAttente(){
    this.adminService.getnbcommandeattente().subscribe(
      (data)=>{
        this.nbattente=data;
      }
    )
}
  nbreCommandeLivraison(){
    this.adminService.getnbcommandelivraison().subscribe(
      (data)=>{
        this.nblivraison=data;
      }
    )
  }
  nbreCommandeAnnule(){
    this.adminService.getnbcommandeannule().subscribe(
      (data)=>{
        this.nbannule=data;
      }
    )
  }
  nbreCommandeFinalisée(){
    this.adminService.getnbcommandefinalisée().subscribe(
      (data)=>{
        this.nbfinalise=data;
      }
    )
  }
  nbreCommandeCours(){
    this.adminService.getnbcommandecours().subscribe(
      (data)=>{
        this.nbcours=data;
      }
    )
  }
nbreCommande(){
    this.adminService.getnbCommande().subscribe({
      next:(data)=>{
        this.nbcommande=data;
      }
    })
}
}
