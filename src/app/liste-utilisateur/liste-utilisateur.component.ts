import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit{
  public utilisateur:any;
 constructor(private adminService:AdminServiceService) {
 }
  ngOnInit(): void {
  }

}
