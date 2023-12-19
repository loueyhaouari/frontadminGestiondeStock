import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Client} from "../model/Client";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
  searchformGroup!:FormGroup;

  public clients:any;
  public currentDate = new Date();
  public nbclient:any;

  constructor(private adminService:AdminServiceService,private router:Router) {
  }
  ngOnInit(): void {
    this.nbreClient();
    this.getClient();
  }
  nbreClient() {
    this.adminService.getnbClient().subscribe({
      next:(data)=>{
        this.nbclient=data;
      }
    })
  }
getClient(){
  this.adminService.getClient().subscribe({
    next:(data)=>{
      this.clients=data;
    }})
}
  deleteClient(client: Client) {
    this.adminService.deleteClient(client).subscribe({
      next:(data)=>{
        this.clients=data;
        this.getClient();
      }}
    )
  }

  EditClient(client: Client) {
    this.router.navigateByUrl('/modifierClient/'+client.id)
  }
}
