import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminServiceService} from "../services/admin-service.service";
import {ActivatedRoute} from "@angular/router";
import {Categorie} from "../model/Categorie";
import {Famille} from "../model/Famille";

@Component({
  selector: 'app-modifier-famille',
  templateUrl: './modifier-famille.component.html',
  styleUrls: ['./modifier-famille.component.css']
})
export class ModifierFamilleComponent implements OnInit{
  familleForm!:FormGroup;
  categories:any;
  familleId!:number;
  nomCategorie!:string;
  constructor(private fb:FormBuilder,private adminService:AdminServiceService,
              private activatedRoute:ActivatedRoute) {
    this.familleForm = new FormGroup({
      id:new FormControl(),
      nom: new FormControl(),
      categorie:new FormGroup({id:new FormControl(),
      nom:new FormControl()
      })
    });
  }

  ngOnInit() {
    this.adminService.getCategorieById(this.adminService.familleCategorieId).subscribe({
      next:(data1)=>{
        this.nomCategorie=data1.nom;
        console.log(this.nomCategorie)
      }})
  this.familleId=this.activatedRoute.snapshot.params['id'];
    this.adminService.getFamilleById(this.familleId).subscribe({
      next:(data)=>{
        console.log(this.familleId);
        this.familleForm=this.fb.group({
          id:[data.id],
          nom:[data.nom],

          categorie: this.fb.group( {
            id: [null],
          nom:[this.nomCategorie]
          })

        })
      },error:err => {
        console.log(err);
      }
    })
    this.adminService
      .getCategories()
      .subscribe((data) => {
        this.categories = data;
      });

  }

  updateFamille() {
    let famille:Famille=this.familleForm.value;
    this.adminService.updateFamille(this.familleId,famille).subscribe({
      next:(data)=>{
        // alert("Famille Updated");
      }
    })
  }
}
