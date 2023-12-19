import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminServiceService} from "../services/admin-service.service";
import {ActivatedRoute} from "@angular/router";
import {Fournisseur} from "../model/Fournisseur";
import {Commandes} from "../model/Commandes";

@Component({
  selector: 'app-modifier-commande',
  templateUrl: './modifier-commande.component.html',
  styleUrls: ['./modifier-commande.component.css']
})
export class ModifierCommandeComponent implements OnInit{

  commandeForm!:FormGroup;
  commandeId!:string;
  commandes:any;
  etats:string[]=["en attente","en livraison","Finalisée","en cours","annulée"];

  constructor(private fb:FormBuilder,private adminService:AdminServiceService,
              private activatedRoute:ActivatedRoute) {
    this.commandeForm= new FormGroup({
      id: new FormControl(),
      etat:new FormControl(),
      prixCommande:new FormControl()
    });
  }
  // filteredEtats: string[] = this.etats.filter(etat => etat!==this.name);

  ngOnInit(): void {
    this.commandeId=this.activatedRoute.snapshot.params['id'];
    this.adminService.getCommandeById(this.commandeId).subscribe({
      next:(data)=>{
        this.commandeForm=this.fb.group({
          id:[data.id],
          etat: [data.etat],
          prixCommande:[data.prixCommande]
        })
      },error:err => {
        console.log(err);
      }
    })
  }

  updateFournisseur() {
    let commande:Commandes=this.commandeForm.value;
    this.adminService.updateCommande(this.commandeId,commande).subscribe({
      next:(data)=>{
      //  alert("commande updated");
      }
    })
  }

  deleteCommande() {
    this.adminService.deleteCommande(this.commandeId).subscribe({
      next:(data)=>{
     //   alert("Commande deleted");
      }
    });
  }
}
