import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Famille} from "../model/Famille";

@Component({
  selector: 'app-ajouter-famille',
  templateUrl: './ajouter-famille.component.html',
  styleUrls: ['./ajouter-famille.component.css']
})
export class AjouterFamilleComponent implements OnInit{

  public categories:any;
  ngForm!: FormGroup;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder) {
  this.createForm();
  }
  ngOnInit(): void {
    this.adminService.getCategories().subscribe({
      next:(data)=>{
        this.categories=data;
      },error:err => {
        console.log("err");
      }
    })
  }
  createForm() {
    this.ngForm = this.fb.group({
      nom: [''],
      categorie: this.fb.group( {id: [null ]})
    });



  }

  addFamille() {
    let famille:Famille=this.ngForm.value;
    this.adminService.saveFamille(famille).subscribe({
      next:data=> {
        // alert("Famille saved")
      }
    });
  }
}
