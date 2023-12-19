import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminServiceService} from "../services/admin-service.service";
import {UserComponent} from "../user/user.component";
import {Utilisateur} from "../model/Utilisateur";

@Component({
  selector: 'app-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.css']
})
export class AddutilisateurComponent implements OnInit{
  userForm!:FormGroup;
  type:string[]=["admin","user"];

  constructor(private adminService:AdminServiceService,private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.userForm=this.fb.group({
      id:[''],
      prenom:[''],
      nom:[''],
      password:[''],
      telephone:[''],
      mobile:[''],
      type:[''],
      email:['']
    })
  }

  AddUser() {
    let user:Utilisateur=this.userForm.value;
  this.adminService.saveUtilisateur(user).subscribe({
    next:(data)=>{
     // alert("user was saved");
    }
  })
  }
}
