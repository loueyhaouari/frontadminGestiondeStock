import {Component, OnInit} from '@angular/core';
import {Categorie} from "../model/Categorie";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminServiceService} from "../services/admin-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modifiergamme',
  templateUrl: './modifiergamme.component.html',
  styleUrls: ['./modifiergamme.component.css']
})
export class ModifiergammeComponent implements OnInit{
  categorieId!:number;
 categorieForm!:FormGroup;
  constructor(private fb:FormBuilder,private adminService:AdminServiceService,
              private activatedRoute:ActivatedRoute) {
    this.categorieForm = new FormGroup({
      nom: new FormControl()
    });
  }


  ngOnInit() {
  this.categorieId=this.activatedRoute.snapshot.params['id'];
this.adminService.getCategorieById(this.categorieId).subscribe({
  next:(data)=>{
    this.categorieForm=this.fb.group({
      nom:[data.nom]
    })
  },error:err => {
    console.log(err);
  }
})

  }
  updateCategorie(){
    let categorie:Categorie=this.categorieForm.value;
    this.adminService.updateCategorie(this.categorieId,categorie).subscribe({
      next:(data)=>{

      }
    })
  }
}
