import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from "../services/admin-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../model/Product";

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit{
  public familles:any;
  ngForm!:FormGroup;
  fournisseurs:any;
  batiments:any;
  public categories:any;
  // unite=["kg","Pièces","Colis","Boite","Barquette"];
  unite:any;
  constructor(private adminService:AdminServiceService,private fb:FormBuilder) {
  this.createForm();
  }
  ngOnInit(): void {
    this.getBatiments();
    this.getUnite();
    this.adminService.getFamille().subscribe({
      next:(data=>{
        this.familles=data;
      })
    })
    this.adminService.getCategories().subscribe({
      next:(data=>{
        this.categories=data;
      })
    })
this.getFournisseur();
  }
  getBatiments(){
    this.adminService.getBatiments().subscribe({
      next:(data)=>{
        this.batiments=data;
      }
    })
  }
    getFournisseur(){
      this.adminService.getFournisseurs().subscribe({
        next:(data)=>{
          this.fournisseurs=data;
        }
      })
    }
    getUnite(){
    this.adminService.getUnites().subscribe({
      next:(data)=>{
        this.unite=data;
      }
    })
    }

  createForm() {
    this.ngForm = this.fb.group({
      nom: [''],
      photoName: [''],
      packaging:[''],
      prix:[''],
      qte:[''],
      famille:this.fb.group( {id: [null ]}),
      categorie: this.fb.group( {id: [null ]}),
      fournisseur: this.fb.group( {id: [null ]})
    });
  }
AddProduct(){
let product:Product=this.ngForm.value;
let a=product.photoName.slice(12,product.photoName.length);
console.log(a);
product.photoName=a;
this.adminService.saveProduct(product).subscribe({
  next:data=>{
  //  alert('Product was saved')
  }
})

}
}
