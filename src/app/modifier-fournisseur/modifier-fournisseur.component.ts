import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminServiceService} from "../services/admin-service.service";
import {ActivatedRoute} from "@angular/router";
import {Fournisseur} from "../model/Fournisseur";

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.css']
})
export class ModifierFournisseurComponent implements OnInit{
  fournisseurForm!:FormGroup;
  fournisseurId!:string;

  constructor(private fb:FormBuilder,private adminService:AdminServiceService,
              private activatedRoute:ActivatedRoute) {
    this.fournisseurForm= new FormGroup({
      id: new FormControl(),
      raisonSociale: new FormControl(),
      nom: new FormControl(),
      adresse: new FormControl(),
      cp: new FormControl(),
      ville: new FormControl(),
      email: new FormControl(),
      telephone: new FormControl(),
      mobile: new FormControl()
    });
  }
  ngOnInit(): void {
  this.fournisseurId=this.activatedRoute.snapshot.params['id'];
    this.adminService.getFournisseurById(this.fournisseurId).subscribe({
      next:(data)=>{
        this.fournisseurForm=this.fb.group({
          id:[data.id],
          raisonSociale:[data.raisonSociale],
          nom:[data.nom],
          adresse:[data.adresse],
          cp:[data.cp],
          ville:[data.ville],
          email:[data.email],
          telephone:[data.telephone],
          mobile:[data.mobile]
        })
      },error:err => {
        console.log(err);
      }
    })
  }

  updateFournisseur() {
    let fournisseur:Fournisseur=this.fournisseurForm.value;
    this.adminService.updateFournisseur(this.fournisseurId,fournisseur).subscribe({
      next:(data)=>{
       // alert("Fournisseur updated");
      }
    })
  }
}
