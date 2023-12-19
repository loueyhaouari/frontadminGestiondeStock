import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Client} from "../model/Client";

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit{

  clientForm!:FormGroup;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.clientForm=this.fb.group({
      id:[''],
      raisonSociale:[''],
      nom:[''],
      adresse:[''],
      cp:[''],
      ville:[''],
      email:[''],
      telephone:[''],
      mobile:['']
    })
  }

  AddClient() {
    let client:Client=this.clientForm.value;
    this.adminService.saveClient(client).subscribe({
      next:(data)=>{
      //  alert("client was saved")
      }
    })
  }
}
