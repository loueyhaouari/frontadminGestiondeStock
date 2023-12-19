import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{
  public products:any;
  public nbProduct:any;
  constructor(private adminService:AdminServiceService) {
  }
  ngOnInit(): void {
    this.adminService.getProducts().subscribe({
      next:(data)=>{
        this.products=data;
      }
    })
    this.getnbreproduit();
  }
  getnbreproduit(){
    this.adminService.getnbProduct().subscribe({next:(data)=>{
        this.nbProduct=data;
      }})
  }

}
