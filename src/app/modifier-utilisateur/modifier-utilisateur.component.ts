import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminServiceService} from "../services/admin-service.service";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../model/Client";
import {Utilisateur} from "../model/Utilisateur";

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit{
  userForm!:FormGroup;
  userId!:number;
  type:string[]=["admin","user"];

  constructor(private adminService:AdminServiceService,private fb:FormBuilder,
            private activatedRoute:ActivatedRoute) {
  this.userForm= new FormGroup({
    id: new FormControl(),
    prenom: new FormControl(),
    nom: new FormControl(),
    adresse: new FormControl(),
    password:new FormControl(),
    cp: new FormControl(),
    email: new FormControl(),
    telephone: new FormControl(),
    mobile: new FormControl(),
    type: new FormControl()
  });
}
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.params['id'];
    this.adminService.getUtilisateurById(this.userId).subscribe({
      next:(data)=>{
        this.userForm=this.fb.group({
          id:[data.id],
           prenom:[data.prenom],
          nom:[data.nom],
          type:[data.type],
          email:[data.email],
          telephone:[data.telephone],
          mobile:[data.mobile],
          password:[data.password]
        })
      },error:err => {
        console.log(err);
      }
    })
  }

  updateUser() {
    let user:Utilisateur=this.userForm.value;
    this.adminService.updateUtilisateur(user.id,user).subscribe({
      next:(data)=>{
      //  alert('user is updated')
      }
    })
  }

  }



