import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../model/Client";

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit{
  clientForm!:FormGroup;
  clientId!:string;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder,
              private activatedRoute:ActivatedRoute) {

    this.clientForm= new FormGroup({
      id: new FormControl(),
      raisonSociale: new FormControl(),
      nom: new FormControl(),
      adresse: new FormControl(),
      cp: new FormControl(),
      ville: new FormControl(),
      email: new FormControl(),
      telephone: new FormControl(),
      mobile: new FormControl()
    });
  }
  ngOnInit(): void {
    this.clientId=this.activatedRoute.snapshot.params['id'];
  this.adminService.getClientById(this.clientId).subscribe({
    next:(data)=>{
      this.clientForm=this.fb.group({
        id:[data.id],
        raisonSociale:[data.raisonSociale],
        nom:[data.nom],
        adresse:[data.adresse],
        cp:[data.cp],
        ville:[data.ville],
        email:[data.email],
        telephone:[data.telephone],
        mobile:[data.mobile]
      })
    },error:err => {
      console.log(err);
    }
  })
  }

  updateClient() {
  let client:Client=this.clientForm.value;
  this.adminService.updateClient(client.id,client).subscribe({
next:(data)=>{
//  alert('Client is updated')
}
  })
  }
}
