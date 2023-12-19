import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Commandes} from "../model/Commandes";
import {CommandeUser} from "../model/CommandeUser";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit{
  commandes:any;
  public currentDate = new Date();
  nbCommande:any;
  commandeForm!:FormGroup;

  etats:string[]=["en attente","en livraison","Finalisée","en cours","annulée"];
  name!: string;
  constructor(private adminService:AdminServiceService,private router:Router,private fb:FormBuilder) {
    this.commandeForm= new FormGroup({
      id: new FormControl(),
      etat:new FormControl(),
      prixCommande:new FormControl()
    });
  }
  filteredEtats: string[] = this.etats.filter(etat => etat!==this.name);
  editCommande(commande:CommandeUser) {
    // this.adminService.getCommandeById(commande.commandeId).subscribe({
    //   next:(data)=>{
    //     this.commandeForm=this.fb.group({
    //       id:[data.id],
    //       prixCommande:[data.prixCommande],
    //       etat:[data.etat],
    //
    //
    //     })
    //   },error:err => {
    //     console.log(err);
    //   }
    // })
   this.router.navigateByUrl('/modifierCommande/'+commande.commandeId)

  }

  ngOnInit(): void {
// this.getCommandes();
    this.getCommandesUser();
this.nbreCommande();
  }
  nbreCommande(){
    this.adminService.getnbCommande().subscribe({
      next:(data)=>{
        this.nbCommande=data;
      }
    })
  }

  getCommandesUser(){
    this.adminService.findCommandeUser().subscribe({
      next:(data)=>{
        this.commandes=data;
      }
    })
  }
getCommandes(){
  this.adminService.getCommandes().subscribe({
    next:(data)=>{
      this.commandes=data;
    }
  })
}
  deleteCommande(commande: CommandeUser) {
    this.adminService.deleteCommande(commande.commandeId).subscribe({
      next:(data)=>{
        this.getCommandesUser();
        this.nbreCommande();
      }
    })
  }

  updateCommande() {

    let commande:Commandes=this.commandeForm.value;
    this.adminService.updateCommande(commande.id,commande).subscribe({
      next:(data)=>{
        alert("commande updated");
      }
    })
  }
}
