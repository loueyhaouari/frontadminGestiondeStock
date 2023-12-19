import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../model/Utilisateur";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit{
  public utilisateur:any;
  nbUtilisateur:any;
  constructor(private adminService:AdminServiceService,private router:Router) {
  }

  ngOnInit(): void {
  this.getUtilisateurs();
  this.nbreUtilisateur();
  }
  getUtilisateurs(){
    this.adminService.getUtilisateurs().subscribe({
      next:(data)=>{
        this.utilisateur=data;
      }
    })
  }

  handleUtilisateur(user: Utilisateur) {
    this.router.navigateByUrl('/modifierUtilisateur/'+user.id)
  }
nbreUtilisateur(){
    this.adminService.getnbUtilisateur().subscribe({
      next:(data)=>{
        this.nbUtilisateur=data;
      }
    })
}
  deleteUser(user: Utilisateur) {
    this.adminService.deleteUtilisateur(user).subscribe({
      next:(data)=>{
        //alert("Utilisateur deleted")
      this.getUtilisateurs();
        this.nbreUtilisateur();
      }
    })
  }
}
