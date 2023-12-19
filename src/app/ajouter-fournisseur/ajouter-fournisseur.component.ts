import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Fournisseur} from "../model/Fournisseur";

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.css']
})
export class AjouterFournisseurComponent implements OnInit{
  ngForm!:FormGroup;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder) {
  this.createForm();
  }
  ngOnInit(): void {

  }
  createForm(){
    this.ngForm=this.fb.group({
      id:[''],
      raisonSociale:[''],
      nom:[''],
      adresse:[''],
      cp:[''],
      ville:[''],
      email:[''],
      telephone:[''],
      mobile:['']
    })
  }

  addFournisseur() {
    let fournisseur:Fournisseur=this.ngForm.value;
    this.adminService.saveFournisseur(fournisseur).subscribe({
      next:data=>{
        //alert('fournisseur was saved')
      this.ngForm.reset();
      }
    })
  }

}
