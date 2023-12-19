import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import {Product} from "../model/Product";

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {
  unite=["kg","Pièces","Colis","Boite","Barquette"];
categories:any;
familles:any;
fournisseurs:any;
productForm!:FormGroup;
produitId!:number;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private activatedRoute:ActivatedRoute ) {
    this.productForm = new FormGroup({
      id:new FormControl(),
      nom: new FormControl(),
      packaging: new FormControl(),
      prix: new FormControl(),
      qte:new FormControl(),
      photoName:new FormControl(),
      categorie:new FormGroup({id:new FormControl()}),
      famille:new FormGroup({id:new FormControl()})
    });
  }
  ngOnInit(): void {
    this.produitId=this.activatedRoute.snapshot.params['id'];
    this.adminService.getProductById(this.produitId).subscribe({
      next:(data)=>{
        this.productForm=this.fb.group({
          id:[data.id],
          nom:[data.nom],
          prix:[data.prix],
          photoName:[null],
          qte:[data.qte],
          packaging:[data.packaging],
          categorie: this.fb.group( {id: [null]}),
          famille: this.fb.group( {id: [null]})

        })
      },error:err => {
        console.log(err);
      }
    })
    this.getFournisseur();
    this.getFamilles();
  this.getCategories();
  }

  getFournisseur(){
    this.adminService.getFournisseurs().subscribe({
      next:(data)=>{
        this.fournisseurs=data;
      }})
  }
  updateProduct() {
    let product:Product=this.productForm.value;
    let a=product.photoName.slice(12,product.photoName.length);
    console.log(a);
    product.photoName=a;
    this.adminService.updateproduct(this.produitId,product).subscribe({
      next:(data)=>{
      //  alert("product Updated");
      }
    })
  }
  getFamilles(){
    this.adminService.getFamille().subscribe({
      next:(data)=>{
        this.familles=data;
      }})
  }
getCategories(){
    this.adminService.getCategories().subscribe({
    next:(data)=>{
      this.categories=data;
    }})
}
}
