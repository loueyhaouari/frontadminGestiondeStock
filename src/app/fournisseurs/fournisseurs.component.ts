import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Fournisseur} from "../model/Fournisseur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit{

  public fournisseurs:any;
  public currentDate = new Date();
nbFournisseur:any;
  constructor(private adminService:AdminServiceService,private router:Router) {
  }
  ngOnInit(): void {
    this.getFournisseurs();
  this.nbreFournisseur();
  }
getFournisseurs(){
    this.adminService.getFournisseurs().subscribe({next:(data)=>{
      this.fournisseurs=data;
      }
    })
}
nbreFournisseur(){
    this.adminService.getnbFournisseur().subscribe({
      next:(data)=>{
        this.nbFournisseur=data;
      }
    })
}

  deleteFournisseur(four: Fournisseur) {
    this.adminService.deleteFournisseur(four).subscribe({
      next:(data)=>{
        console.log("Fournisseur deleted")
      this.getFournisseurs();
      this.nbreFournisseur();
      }
    })
  }

  editFournisseur(four: Fournisseur) {
    this.router.navigateByUrl('/modifierFournisseur/'+four.id)
  }
}
