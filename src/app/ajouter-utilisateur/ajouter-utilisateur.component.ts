import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit{
 userForm!:FormGroup;
  constructor(private adminService:AdminServiceService) {
  }
  ngOnInit(): void {

  }

}
