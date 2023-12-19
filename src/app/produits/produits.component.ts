import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {Product} from "../model/Product";
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Categorie} from "../model/Categorie";
import {Router} from "@angular/router";
import {CategorieFamille} from "../model/CategorieFamille";
import {ProductFamille} from "../model/ProductFamille";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  products!:Observable<Array<Product>>;
  productFamille:any;
  prod:any;
  searchformGroup!:FormGroup;
  nbProduct:any;
  fournisseurs:any;


  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router) {
  }
  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      keyword:this.fb.control("")
    });
    this.handleSearchProducts();
// this.getProduct();
    this.getProductFamille();
    this.getnbreproduit();
  }
getProductFamille(){
    this.adminService.getProductswithFamilles().subscribe({
      next:(data)=>{
        this.productFamille=data;
      }
    })
}
getnbreproduit(){
    this.adminService.getnbProduct().subscribe({next:(data)=>{
      this.nbProduct=data;
      }})
}
getFournisseurs(){
    this.adminService.getFournisseurs().subscribe({
      next:(data)=>{
        this.fournisseurs=data;
      }
    })
}
getProduct(){
  this.adminService.getProducts().subscribe({
    next:data=>{
      this.prod=data;
    }
  })
}


  handleSearchProducts() {
    let kw=this.searchformGroup?.value.keyword;
    this.adminService.searchProduct(kw).subscribe({
      next:(data)=>{
        this.productFamille=data;
      }
    })

  }

  deleteProduct(prod: ProductFamille) {
    this.adminService.deleteProduct(prod).subscribe({
      next:(data)=>{
      //  alert("Product is deleted");
this.handleSearchProducts()
      this.getProductFamille();
this.getnbreproduit();
      }
    })
  }

  ModifierProduct(prod: ProductFamille) {
    this.router.navigateByUrl('/modifierProduit/'+prod.familleId)
  }
}
