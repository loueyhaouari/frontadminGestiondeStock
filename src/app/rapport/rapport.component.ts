import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit{
  public nbProduct:any;
  products:any;
  constructor(private adminService:AdminServiceService) {
  }
  ngOnInit(): void {
    this.getProducts();
    this.getnbreproduit();
  }
  getnbreproduit(){
    this.adminService.getnbProduct().subscribe({next:(data)=>{
        this.nbProduct=data;
      }})
  }

  getProducts(){
    this.adminService.getProducts().subscribe({
      next:(data)=>{
        this.products=data;
      }
    })
  }
}
