import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Categorie} from "../model/Categorie";
import {AdminServiceService} from "../services/admin-service.service";

@Component({
  selector: 'app-ajoutergammes',
  templateUrl: './ajoutergammes.component.html',
  styleUrls: ['./ajoutergammes.component.css']
})
export class AjoutergammesComponent implements OnInit{

  ngForm!:FormGroup;
  constructor(private fb:FormBuilder,private adminService:AdminServiceService) {
  this.createForm();
  }
  createForm(){
    this.ngForm=this.fb.group({
      nom:[''],
    })
  }
  AddCategorie() {
  let categorie:Categorie=this.ngForm.value;
  this.adminService.saveCategorie(categorie).subscribe(
    {next:value=>
        console.log('categorie Saved')
    }
  );
  }

  ngOnInit(): void {
  }
}
